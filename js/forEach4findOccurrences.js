在数组 arr 中，查找值与 item 相等的元素出现的所有位置
function findAllOccurrences(arr, target) {
    var oa = [];
    arr.forEach(function(val,index){
        if (target===val){
            oa.push(index);
        }
    });
    return oa;
}