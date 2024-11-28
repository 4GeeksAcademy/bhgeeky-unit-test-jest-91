// importamos la funcion sum
const {sum, fromEuroToDollar, fromYentoPound, fromDollarToYen} = require("./app.js");

test("mensaje: sumamos 14 + 9 que es igual a 23", () => {
    // llamamos a la función sum con dos números
    let total = sum(14, 9);

    // esperamos que sum nos devuelvaa 23
    expect(total).toBe(23);
});

test("segundo testttttt", () => {
    let total = sum(-4, 4);
    expect(total).toBe(0);

});
test("texto", () => {
    let total = sum(-4, -8)
    expect(total).toBe(-12)
});

test("mensaje: 20 euro to dollar", () => {
    let total = fromEuroToDollar(20)
    expect(total).toBe("21.40")
});

test("mensaje: 20 yen to pound", () => {
    let total = fromYentoPound(20)
    expect(total).toBe("0.1040")
});

test("mensaje 20 dollar to yen", () => {
    let total = fromDollarToYen(20)
    expect(total).toBe("3030.20")
})




