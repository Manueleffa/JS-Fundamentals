const firstArg = process.argv;

if (firstArg[2] !== undefined) {
  console.log(firstArg[2]);
} else {
  console.log("No argument");
}