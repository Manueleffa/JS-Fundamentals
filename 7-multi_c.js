const x = process.argv;
const num = Number(x[2]);


if (!isNaN(num)){
    for (i = 0; i < num; i++){
        console.log("C is fun");
    }
} else {
    console.log("Missing number of occurrences");
}