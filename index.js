var limit = 1000;
var array = [];
// i want to setup an array of numbers
// random generation
// so that I can sort it later
for (var i = 0; i < limit; i++) {
    var v = Math.random() * limit;
    array.push(v);
}
// define sorting function
function Sort(value) {
    for (var i = 0; i < value.length; i++) {
        if (i == 0)
            continue;
        var current = value[i];
        var previous = value[i - 1];
        if (current > previous) {
            value[i - 1] = current;
            value[i] = previous;
        }
    }
}
function IsSorted(value) {
    var result = false;
    for (var i = 0; i < value.length; i++) {
        if (i == 0)
            continue;
        var current = value[i];
        var previous = value[i - 1];
        if (current > previous) {
            return false;
        }
    }
    return true;
}
// print
function Print(value) {
    for (var i = 0; i < value.length; i++) {
        console.log(value[i]);
    }
}
var isSorted = false;
var sortRun = 1;
do {
    console.log("Sorting run: " + sortRun);
    sortRun++;
    console.time("Sort Time");
    Sort(array);
    console.timeEnd("Sort Time");
    isSorted = IsSorted(array);
    console.log("Is sorted: " + isSorted);
    console.log("");
} while (!isSorted);
