const array =  ['apple', 'oranges' , ' ', 'mango', ' ' , 'lemon'];

const transformedArray = array.map(fruit => {

    if(fruit.trim() === ''){
        return 'empty string';
    } else {
        return fruit;
    }
});

console.log(transformedArray);