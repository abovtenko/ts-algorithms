
let limit = 1000;
let array: number[] = [];

// populate unsorted values
for (var i = 0; i < limit; i++) {
    let v = Math.random() * limit;
    array.push(v);    
}

// define sorting function
function quickSort(arr : number[]) : number[] {
    if (arr.length <= 1) {
        return arr;
    }

    let pivot = arr[arr.length - 1];
    let left: number[] = [];
    let right: number[] = [];

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        }
        else {
            right.push(arr[i]);
        }
    }

    return [...quickSort(left), pivot, ...quickSort(right)];
}

// print the array to console
function Print(value : number[]) : void {
    for (var i = 0; i < value.length; i++) {
        console.log(value[i]);   
    }
}

Print(array);

console.time("Sort Time");
array = quickSort(array);
console.timeEnd("Sort Time");  

Print(array);



