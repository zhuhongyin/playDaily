// 找出数组 arr 中重复出现过的元素
// 方法1 先sort 后判断相邻的element
// 方法2 hash方法
// f3  指针 

// f1
function duplicates(arr) {
    var a=[];
    var b=[];
    var b = arr.sort();
    for(var i =0;i<b.length-1;i++){
        if((b[i]===b[i+1])&&a.indexOf(b[i])==-1){
            a.push(b[i]);
            i++
        }
    }
    return a;
}

// 方法2 hash方法
function duplicates(arr) {
     //声明两个数组，a数组用来存放结果，b数组用来存放arr中每个元素的个数
     var a = [],b = [];
     //遍历arr，如果以arr中元素为下标的的b元素已存在，则该b元素加1，否则设置为1
     for(var i = 0; i < arr.length; i++){
         if(!b[arr[i]]){
             b[arr[i]] = 1;
             continue;
         }
         b[arr[i]]++;
     }
     //遍历b数组，将其中元素值大于1的元素下标存入a数组中
     for(var i = 0; i < b.length; i++){
         if(b[i] > 1){
             a.push(i);
         }
     }
     return a;
 }

// f3  指针
function duplicates(arr) {
    arr.sort(); //排序
    var nArr = [];
    for (var i = 0, j = 1; j < arr.length; j++) { //前后两个指针
        if (arr[i] != arr[j]) {
            if (j - i > 1) {
                nArr.push(arr[i]);
            }
            i = j; //不等时替换指针
        }
    }
    return nArr;
}