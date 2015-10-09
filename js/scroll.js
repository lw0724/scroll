/**
 * Created by luowei1 on 2015/8/4.
 */
function Scroll(){
    "use strict";
    var scroll=this;
    scroll.config={
        scrollELE:"",
        scrollStart:"",
        scrollMove:"",
        scrollEnd:"",
        scrollTop:"",
        scrollLeft:"",
        scrollBottom:"",
        scrollRight:"",
        scrollStartTime:"",
        scrollMoveTime:""
    };
    scroll.contorl={
        startX:0,
        moveX:0,
        endX:0,
        startY:0,
        moveY:0,
        endY:0,
        scrollX:0,
        scrollY:0,
        target:{}
    };
    extendsOBJ(scroll.config,arguments[0]);
    scroll.init=function(){
        scroll.config.scrollELE.addEventListener("touchstart",function(e){
            scroll.scrollStart(e);
        });
        scroll.config.scrollELE.addEventListener("touchmove",function(e){
            e.preventDefault();
            scroll.scrollMove(e);
        });
        scroll.config.scrollELE.addEventListener("touchend",function(e){
            scroll.scrollEnd(e);
            e.returnValue=true;
        });
    };
    scroll.init();
    return scroll.config;
}
Scroll.prototype={
    constructor:Scroll,
    scrollStart:function(){
        this.contorl.target=arguments[0];
        var location=arguments[0].touches[0];
        this.contorl.startX= location.pageX;
        this.contorl.startY= location.pageY;
        isFunc(this.config.scrollStart) ? this.config.scrollStart.call(this,this.contorl) :"";
    },
    scrollMove:function(){
        var location=arguments[0].touches[0];
        this.contorl.moveX= location.pageX-this.contorl.startX;//+this.contorl.scrollX;
        this.contorl.moveY= location.pageY-this.contorl.startY;//+this.contorl.scrollY;
        isFunc(this.config.scrollMove) ? this.config.scrollMove.call(this,this.contorl) : this.config.scrollELE.style.webkitTransform="translate("+this.contorl.moveX+"px,"+this.contorl.moveY+"px)";

    },
    scrollEnd:function(){
        var location=arguments[0].touches[0];
        this.contorl.endX= this.contorl.moveX;
        this.contorl.endY= this.contorl.moveY;
        this.contorl.scrollX=this.contorl.moveX;
        this.contorl.scrollY=this.contorl.moveY;
        this.scrollDirection();
        if(isFunc(this.config.scrollEnd)) this.config.scrollEnd.call(this,this.contorl);

    },
    scrollLeft:function(){
        if(isFunc(this.config.scrollLeft))  this.config.scrollLeft.call(this,this.contorl);
    },
    scrollTop:function(){

        if(isFunc(this.config.scrollTop)) this.config.scrollTop.call(this,this.contorl);
    },
    scrollBottom:function(){
        console.log("bottom")
        if(isFunc(this.config.scrollBottom)) this.config.scrollBottom.call(this,this.contorl);
    },
    scrollRight:function(){
        if(isFunc(this.config.scrollRight)) this.config.scrollRight.call(this,this.contorl);
    },
    scrollDirection:function(){
        var moveX=this.contorl.moveX-this.contorl.startX;
        var moveY=this.contorl.moveY-this.contorl.startY;
        console.log(moveX+":"+moveY);
        var Direction= getPositive(moveX) > getPositive(moveY) ? "LeftOrRight" :"UpOrDown";
        if(Direction=="UpOrDown"){
            console.log("UpOrDown");
            moveY >0 ? this.scrollBottom() : this.scrollTop();
        }
        if(Direction=="LeftOrRight"){
            moveX >0 ? this.scrollRight() : this.scrollLeft();
        }
    }
};
function extendsOBJ(){
    for(var key in arguments[0]){
        arguments[0][key]=arguments[1][key] || "";
    }
}
function isFunc(){
    return arguments[0].constructor==Function;
}
function getPositive(){
    return arguments[0]<0 ? -arguments[0] : arguments[0];
}