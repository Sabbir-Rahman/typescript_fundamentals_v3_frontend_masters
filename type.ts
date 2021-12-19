//typing functions
function add(a:number,b:number):number{
    return a+b
}

console.log(add(add(3,4),4))

//typing objects 
const mytesla = {
    make:"Tesla",
    model:"v3",
    year:2020,
    chargeVoltage:220,
    color:"red"
}


//typing optional property
function printCar(
    car: {
        make:string
        model:string
        year:number
        chargeVoltage?:number
    
    }
){
    let str = `My car ${car.make} ${car.model} ${car.year}`

    if (typeof car.chargeVoltage !== "undefined"){
        str+= `// ${car.chargeVoltage}v`
    }

    console.log(str)

}

printCar({make:"Honda",model:"Acccord",year:2017})
printCar(mytesla)