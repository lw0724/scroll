/**
 * Created by luowei on 2015/10/8.
 */
var browser={
    isMobile:function(){
        var Agents = ["Android", "iPhone","iPad", "iPod"];
        for (var v = 0; v < Agents.length; v++) {
            if (navigator.userAgent.indexOf(Agents[v]) > 0) {
                return true;
            }
        }
        return false;
    },
    isIphone:function(){
        if(navigator.userAgent.indexOf("iPhone") > 0 || navigator.userAgent.indexOf("iPod") > 0) {
            return true;
        }
        return false;
    },
    isIpad:function(){
        if(navigator.userAgent.indexOf("iPad") > 0) {
            return true;
        }
        return false;
    },
    isAndroid:function(){
        if(navigator.userAgent.indexOf("Android") > 0) {
            return true;
        }
        return false;
    },
    isIE:function(){
        if(navigator.userAgent.indexOf("MSIE") > 0) {
            return true;
        }
        return false;
    },
    ieVersion:function(){
        if(navigator.userAgent.indexOf("MSIE 6.0")> 0){
            return 6;
        }else if(navigator.userAgent.indexOf("MSIE 7.0")> 0){
            return 7;
        }else if(navigator.userAgent.indexOf("MSIE 8.0")> 0){
            return 8;
        }else if(navigator.userAgent.indexOf("MSIE 9.0")> 0){
            return 9;
        }else if(navigator.userAgent.indexOf("MSIE 10.0")> 0){
            return 10;
        }else{
            return 11;
        }
    }

};