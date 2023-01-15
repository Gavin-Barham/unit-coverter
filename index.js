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
            feetToMeters: (this.feetToMeters * num).toFixed(3),
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
    if (inputEl.value === 1) {
        let obj = units.convert(inputEl.value)
        lengthEl.textContent = `${inputEl.value} meter = ${obj.meterToFeet} feet | ${inputEl.value} foot = ${obj.feetToMeters} meters`
        
        volumeEl.textContent = `${inputEl.value} liter = ${obj.literToGallon} gallons | ${inputEl.value} gallon = ${obj.gallonToLiters} liters`
        
        massEl.textContent = `${inputEl.value} kilogram = ${obj.kiloToPound} pounds | ${inputEl.value} pound = ${obj.poundToKilo} kilograms`
    } else {
        let obj = units.convert(inputEl.value)
        lengthEl.textContent = `${inputEl.value} meters = ${obj.meterToFeet} feet | ${inputEl.value} feet = ${obj.feetToMeters} meters`
        
        volumeEl.textContent = `${inputEl.value} liters = ${obj.literToGallon} gallons | ${inputEl.value} gallons = ${obj.gallonToLiters} liters`
        
        massEl.textContent = `${inputEl.value} kilograms = ${obj.kiloToPound} pounds | ${inputEl.value} pounds = ${obj.poundToKilo} kilograms`
    }
    
})