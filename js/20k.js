/**
 * @在old binding logic上加新的logic
 * @author
 * @date
 * */
((w) =>{
    w.listenerList = new Set();
    const _cache = w.addEventListener;
    const handler = {
        apply: (target, thisbinding, args) => {
           target();
           listenerList.add(args[0]);
           Reflect.apply(_cache, w, args);
        }
    }
    w.addEventListener = new Proxy((evntname,fn)=>{
        console.log(222);
    },handler);

})(window);

//old logic
window.addEventListener("resize",function (argument) {
    console.log(111);
});
//new logic
window.addEventListener("a",function (argument) {
    console.log("new logic");
});