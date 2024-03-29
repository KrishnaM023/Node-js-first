const productOfTwo = (a, b) => a * b;

console.log(productOfTwo(5, 6));

const student = {
    name: "Jhon",
    age: 17,
    address: "Delhi",

    studentDetails() {
        console.log("I am " + this.name + ", my age is " + this.age )
    }
}

student.studentDetails();