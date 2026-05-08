
function removeDuplicates(str) {
    let result = '';
    for(let i = 0; i< str.length; i++) {
        if(!result.includes(str[i])) {
            result += str[i];
        }
    }
    return result.split('').reverse().join('');

};
console.log(removeDuplicates('hello world'));

function isPrime(num) {
    if(num <= 1) return false;
    for(let i = 2; i<= Math.sqrt(num); i++) {
        if(num % i === 0) return false;
    }
    return true;
}
console.log(isPrime(12)); // Output: true

function countVowels(str) {
    const vowels = 'aeiouAEIOU';
    let count = 0;
    let withoutVowels = '';
    for (let i= 0; i < str.length; i++) {
        if(vowels.includes(str[i])) {
            count++;
        } else {
            withoutVowels += str[i];
        }
    }
    withoutVowels = withoutVowels.split('').reverse().join('');
    return { count, withoutVowels };
}
console.log(countVowels('Hello World'));