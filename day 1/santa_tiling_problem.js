function calculateTotalSantaCost(length, width, m2price) {
    var area = length * width;
    var areaWithExtra = area * 1.05;
    var totalCost = areaWithExtra * m2price;
    return Number(totalCost.toFixed(2));
}
function showHelp() {
    console.log("Some help");
}
var args = process.argv.slice(2);
console.log(args);
if (args.length !== 3) {
    console.error("Need 3 arguments: lenght, width, price for squere meter");
    showHelp();
    process.exit(1);
}
var lenght = Number(args[0]);
var width = Number(args[1]);
var m2price = Number(args[2]);
if (isNaN(lenght) || isNaN(width) || isNaN(m2price)) {
    console.error("Arguments should be numbers");
    showHelp();
    process.exit(1);
}
try {
    var result = calculateTotalSantaCost(lenght, width, m2price);
    console.log("Total price: ", result);
}
catch (error) {
    if (error instanceof Error) {
        console.error("Error:", error.message);
    }
    process.exit(1);
}
