var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var limit = 1000;
var array = [];
// populate unsorted values
for (var i = 0; i < limit; i++) {
    var v = Math.random() * limit;
    array.push(v);
}
// define sorting function
function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    var pivot = arr[arr.length - 1];
    var left = [];
    var right = [];
    for (var i_1 = 0; i_1 < arr.length - 1; i_1++) {
        if (arr[i_1] < pivot) {
            left.push(arr[i_1]);
        }
        else {
            right.push(arr[i_1]);
        }
    }
    return __spreadArray(__spreadArray(__spreadArray([], quickSort(left), true), [pivot], false), quickSort(right), true);
}
// print the array to console
function Print(value) {
    for (var i = 0; i < value.length; i++) {
        console.log(value[i]);
    }
}
Print(array);
console.time("Sort Time");
array = quickSort(array);
console.timeEnd("Sort Time");
Print(array);
