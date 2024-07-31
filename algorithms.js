function reverseString(str) {
    return str.split('').reverse().join('');
}

function factorial(number){
    let total = 1;
    for(let i = 1; i <= number; i++){
        total *= i;
    }
    return total;
}

function factorialRecursive (number) {
    if(number === 1){
        return 1;
    }
    return number * factorialRecursive(number - 1);
}

function findLongestWord(str) {
    return str.split(' ').reduce((longest, word) => {
        return word.length > longest.length ? word : longest;
    }, '');
}

function findSmallestNumber(arr) {
    let smallest = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] < smallest){
            smallest = arr[i];
        }
    }
    return smallest;
}

console.log(reverseString('hello')); // olleh
console.log(factorial(5)); // 120
console.log(factorialRecursive(5)); // 120
console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // jumped
console.log(findSmallestNumber([1, 2, 3, 4, 5])); // 1