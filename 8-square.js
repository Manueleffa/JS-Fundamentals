const x = process.argv;
const num = Number(x[2]);

if (!isNaN(num)) {
  for (i = 0; i < num; i++) {
    let b ="";
    for (c =0; c < num; c++){
        b += "X"
    }

    console.log(b);
  }
} else {
  console.log("Missing size");
}
