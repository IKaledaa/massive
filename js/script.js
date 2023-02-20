let arr = ['Vanya', 'Ishtvan', 'Kolya',];
let newArr = arr;
newArr.push('Petya');
console.log(arr.length);
// length = 4

let arr1 = ['Vanya', 'Ishtvan',];
arr1.push('Olya');
console.log(arr1);
arr1.splice(1, 2, 'Petya');
console.log(arr1);
let removedArr1 = arr1.splice(1,1);
console.log(arr1);
arr1.splice(0, 1, 'Masha', 'Sasha');
console.log(arr1);

let arr2 = ['Vanya', 'Ishtvan', 'Kolya',];
let removedArr2 = arr2.splice(1,1);
console.log(removedArr2);

let arr3 = [9, 2, 8];
let reduceValue = arr3.reduce(function (previousValue, item, index, array){
    console.log(previousValue);
});
//previousValue = 9, потому что не указали его начальное значение