const a = process.argv[2];
const b = process.argv[3];

const val1 = Number(a);
const val2 = Number(b);

function add(a, b){
    return a + b;
}

console.log(add(val1, val2));