
function add(num1, num2) {
    return num1 + num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}


//reduce
const numbs = [34, 56, 78, 92];
let sum = 0;
for (const num of numbs) {
    sum = sum + num;
}

const reducer = (previous, current) => previous + current;
numbs.reduce(reducer, 0)

const jinish = [
    { id: 1, name: 'alta', price: 25 },
    { id: 2, name: 'Nail Polish', price: 500 },
    { id: 3, name: 'Face Mask', price: 250 },
    { id: 4, name: 'Mascara', price: 590 }
]
let total = 0;
for (const jini of jinish) {
    total = total + jini.price;
}

const jinishReducer=(previous,current)=>previous+current.price;
const jinishTotal =jinish.reduce(jinishReducer,0);

export { add, multiply }