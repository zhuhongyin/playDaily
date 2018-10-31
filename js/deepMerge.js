
// deepMerge(obj1, obj2)
// obj1: {a: 1, b: 2} obj2: {a: 11, c: 3}  {a: 11, b: 2, c: 3}

function deepMerge(obj1, obj2){

    if (obj1||obj2){
        var obj = {};
        if(typeOf Obj1 !== Object || typeOf Obj2 !== Object ){

            return ;

        }else{
            if(!obj1){
                return obj2;
            }
            repeatMerge(obj1,obj2);
        }
        return obj;
    }
}

function repeatMerge(obj1, obj2){
    for(var key1 in obj1){
        if(obj2.key1){
            obj.key1 = obj2.key1;
        }else{
            obj.key1 = obj1.key1;
        }

    }
    for(var key2 in obj2){
        if(!obj.key2){
            obj.key2 = obj2.key2;
        }
    }
}
//plugin 1 verson
var merge = function(target, src) {
    var key, value, _results;
    _results = [];
    for (key in src) {
        value = src[key];
        if (!(value instanceof Object)) {
            _results.push(target[key] = value);
        } else {
            if (!target[key] || !(target[key] instanceof Object)) target[key] = {};
            _results.push(merge(target[key], value));
        }
    }
    return _results;
};

obj1 = {a: 1, b: 2};
obj2 = {a: 11, c: 3};
merge(obj1,obj2);