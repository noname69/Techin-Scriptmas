function calculateTotalSantaCost(length, width, m2price) {
    var area = length * width;
    var areaWithExtra = area * 1.05;
    var totalCost = areaWithExtra * m2price;
    return Number(totalCost.toFixed(2));
}
console.log(calculateTotalSantaCost(110, 50, 20.33));
