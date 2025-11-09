const x = process.argv[2];
const num = Number(x);

if (!isNaN(num)) {
    console.log(`My number: ${num}`);
} else {
    console.log("Not a number");
}