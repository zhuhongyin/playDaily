// 删除数组 arr 最后一个元素。不要直接修改数组 arr，结果返回新的数组
// arrayObject.slice(start,end) 请注意，该方法并不会修改数组，而是返回一个子数组
// slice(start,end)该方法并不会修改数组,返回新数组
// splice() 方法会直接对数组进行修改
function truncate(arr) {
    return arr.slice(0,arr.length-1);
}
