
// A java script object can also have function in itself
const person = {
    name: 'Anil',
    age: 30,
    greet: function() {
        console.log('Hello my name is: '+this.name);
    }
}
// person.greet();

// iterete over the array `
let arrayName = [3, 5,8,5,2,9,7];
const arrayName1 = ['Apple', 'Orange', 'Banana', 'Milk'];
arrayName1.forEach((name, index) => {
    console.log(`Name of the fruit is: ${name}`);
})
console.log(`------------------------------------------------`);
console.log(`Log 1`);
console.log(`Log 2`);
console.log(`Log 3`);
console.log(`Log 4`);
