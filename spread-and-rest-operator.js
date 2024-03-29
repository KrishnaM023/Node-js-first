// Spread Operator Use
const person = {
    name: "Jhon",
    age: 18,

    demo() {
        console.log("Hi, I am " + this.name);
    }
};

const copiedPerson = {...person};
console.log(copiedPerson);

const hobbies = ['Sports', 'Cooking'];

const coppiedArray = [...hobbies];

console.log(coppiedArray);

// Rest Operator Use
const toArray = (...args) => {
    return args;
}

console.log(toArray(1, 2, 3, 4, 5));