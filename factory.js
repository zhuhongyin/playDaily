// var createPerson = function (name, age, sex) {
//     return{
//         name:name,
//         age:age,
//         sex:sex,
//         sayHello:function () {
//             console.log(name);
//         }
//     }
// }
function CreatePerson (name, age, sex) {
    
        this.name=name;
        this.age=age;
        this.sex=sex;
        this.sayHello=function () {
            console.log(name);
        }
    
}
var p = new CreatePerson("ZHY",28,"MAN");
p.sayHello();

//arguments 动态参数
var add = function(){
    results =0;
    if (arguments.length){
       for(i=0;i<arguments.length;i++){
           results+=arguments[i]
       }
    }
    return results;
};
add(1,2,3);