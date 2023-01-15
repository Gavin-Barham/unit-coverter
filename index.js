/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let units = {
    meterToFeet: 3.281,
    literToGallon: 0.264,
    kiloToPound: 2.204,
    feetToMeters: 0.3048,
    gallonToLiters: 3.78541,
    poundToKilo: 0.453592,
    convert: function (num) {
        return {
            meterToFeet: (this.meterToFeet * num).toFixed(3),
            literToGallon: (this.literToGallon * num).toFixed(3),
            kiloToPound: (this.kiloToPound * num).toFixed(3),
            feetToMeters: (this.meterToFeet * num).toFixed(3),
            gallonToLiters: (this.gallonToLiters * num).toFixed(3),
            poundToKilo: (this.poundToKilo * num).toFixed(3)
        }
    }
}
const btnEL = document.getElementById("btn-el")
const inputEl = document.getElementById("input-el")
const lengthEl = document.getElementById("length-el")
const volumeEl = document.getElementById("volume-el")
const massEl = document.getElementById("mass-el")

btnEL.addEventListener("click", () => {
    lengthEl.textContent = `${inputEl.value} meters = ${units.meterToFeet} feet | ${inputEl.value} feet = ${units.feetToMeters} meters`
    
    volumeEl.textContent = `${inputEl.value} liters = ${units.literToGallon} gallons | ${inputEl.value} gallons = ${units.gallonToLiters} liters`
    
    massEl.textContent = `${inputEl.value} kilograms = ${units.kiloToPound} pounds | ${inputEl.value} pounds = ${units.poundToKilo} kilograms`
    
})