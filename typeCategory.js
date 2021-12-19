//typing functions
function add(a, b) {
    return a + b;
}
console.log(add(add(3, 4), 4));
//typing objects 
var mytesla = {
    make: "Tesla",
    model: "v3",
    year: 2020,
    chargeVoltage: 220,
    color: "red"
};
//typing optional property
function printCar(car) {
    var str = "My car " + car.make + " " + car.model + " " + car.year;
    if (typeof car.chargeVoltage !== "undefined") {
        str += "// " + car.chargeVoltage + "v";
    }
    console.log(str);
}
printCar({ make: "Honda", model: "Acccord", year: 2017 });
printCar(mytesla);
//dictionary 
var phones = {
    home: { country: "+1", area: "211", number: "652-4515" },
    work: { country: "+1", area: "670", number: "752-5856" },
    fax: { country: "+1", area: "322", number: "752-5856" }
};
var books;
books = {
    home: { country: "+1", area: "211", number: "652-4515" }
};
console.log(books.home.country);
//array
var fileExtensions = ["js", "ts"];
var cars = [
    {
        make: "Toyota",
        model: "Corolla",
        year: 2002
    },
    {
        make: "Honda",
        model: "Accord",
        year: 2017
    }
];
//tuples
var myCarTuple = [
    2002,
    "Toyota",
    "Corolla"
];
myCarTuple = [2002, "Accord", "Sedan"];
console.log(myCarTuple);
//problem in tuple tr as array
myCarTuple.push("Abcd");
console.log(myCarTuple);
//Structural and non structural
//Strong -> Static -> Compile time c,c++, ts
//Weak -> Dynamic -> python, javascript
//union types
function flipCoin() {
    if (Math.random() > 0.5)
        return "heads";
    return "tails";
}
//union types with tuples
function maybeGetUserInfo() {
    if (flipCoin() === "heads") {
        return [
            "success",
            { name: "Mike North", email: "mike@example.com" }
        ];
    }
    else {
        return [
            "error",
            new Error(" The coin landed on tails :(")
        ];
    }
}
// const outcome = maybeGetUserInfo()
