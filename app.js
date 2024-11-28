console.log("Hello World");

const sum = (a, b) => {
    return a + b;

}
console.log(sum(7, 3));


const fromDollarToYen = function(yenNum) {
    let dollarNum = yenNum * 151.51;
    return (dollarNum).toFixed(2);
};
const fromEuroToDollar = function(dollarNum) {
    let euroNum = dollarNum * 1.07;
    return (euroNum).toFixed(2);
};
const fromYentoPound = function(poundNum) {
    let yenNum = poundNum * 0.0052;
    return (yenNum).toFixed(4);
};
module.exports = {sum, fromDollarToYen, fromYentoPound, fromEuroToDollar};
