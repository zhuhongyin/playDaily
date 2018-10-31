//防抖 flag = true立即执行
function debounce (func, wait, flag) {
    var timeout;

    return function(){
        var context = this;
        clearTimeout(timeout);

        if(flag){
            var callNow = !timeout;//判断第一次是否立即执行
            timeout = window.setTimeout(function () {
                timeout = null;
            }, wait);

            if(callNow){
                func.apply(context);
            }
        }else{
            timeout = window.setTimeout(function () {
                func.apply(context);
            }, wait);
        }
    }
}
//jieliu节流 未完待续，参考underscore  _.throttle函数
function throttle(func, wait) {
    var context, previous = 0;
    return function () {
        var now = + new Date();
        context = this;
        if(now - previous > wait){
            func.apply(context);
            previous = now;
        }
    }
}