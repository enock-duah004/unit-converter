/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let userInp = document.getElementById("user-input")
let convBtn = document.getElementById("conv-btn")
let lengthEl = document.getElementById("length-container")
let volconv = document.getElementById("volume-container")
let massconv = document.getElementById("mass-container")

const meterToFeet = 3.281
const literToGallon = 0.264
const kiloToPound = 2.204


convBtn.addEventListener("click", function(){
    let baseValue = userInp.value
    
    lengthEl.textContent = `${baseValue} meter = ${baseValue * meterToFeet} feet`
    volconv.textContent = `${baseValue} liters = ${baseValue * literToGallon} gallons`
    massconv.textContent = `${baseValue} kilos = ${baseValue * kiloToPound.toFixed(2)} pounds`
});
