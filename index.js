var limit = 10000;
var array = [];
// populate unsorted values
for (var i = 0; i < limit; i++) {
    var v = Math.random() * limit;
    array.push(v);
}
// define sorting function
function BubbleSort(list) {
    for (var i = 0; i < list.length - 1; i++) {
        for (var j = 0; j < list.length - 1 - i; j++) {
            if (list[j] > list[j + 1]) {
                var current = list[j];
                list[j] = list[j + 1];
                list[j + 1] = current;
            }
        }
    }
}
// print the array to console
function Print(value) {
    for (var i = 0; i < value.length; i++) {
        console.log(value[i]);
    }
}
//Print(array);
console.time("Sort Time");
BubbleSort(array);
console.timeEnd("Sort Time");
//Print(array);
/*
let isSorted = false;
let sortRun = 1;

do {
    console.log("Sorting run: " + sortRun);
    sortRun++;

    console.time("Sort Time");
    BubbleSort(array);
    console.timeEnd("Sort Time");

    isSorted = IsSorted(array);
    console.log("Is sorted: " + isSorted);
    console.log("");
}
while (!isSorted);
*/
