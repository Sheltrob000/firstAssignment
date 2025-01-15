function square (num){
    return num * num;
};
console.log(square(2));

const greet = (name) => `hello ${name}`;
console.log(greet("Robby"));

function counter (){
    let count = 5;
    return function iterate(){
        count++;
        return count;
    }
}
const iterator = counter();
console.log(iterator());
console.log(iterator());




const result = (function(...a) {
    return a.reduce((a, b) => a + b )
})(1, 2, 3, 4, 5);

console.log(result);