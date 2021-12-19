function add(a, b) {
    return a + b;
}
console.log(add(add(3, 4), 4));
//objects 
var mytesla = {
    make: "Tesla",
    model: "v3",
    year: 2020,
    chargeVoltage: 220,
    color: "red"
};
function printCar(car) {
    var str = "My car " + car.make + " " + car.model + " " + car.year;
    if (typeof car.chargeVoltage !== "undefined") {
        str += "// " + car.chargeVoltage + "v";
    }
    console.log(str);
}
printCar({ make: "Honda", model: "Acccord", year: 2017 });
printCar(mytesla);
