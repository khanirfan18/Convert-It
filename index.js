const meter = 3.281
const liter = 0.264 
const kilogram = 2.204 
const feet = 0.304
const gallon = 3.787 
const pound = 0.454

const inputEl = document.getElementById("inputs")
const inputBtn = document.getElementById("input-btn")

const meterRead = document.getElementById("mf-fm")
const literRead = document.getElementById("lg-gl")
const kiloRead = document.getElementById("kp-pk")

let inputValue = 0

inputBtn.addEventListener("click", function () {
    inputValue = Number(inputEl.value)
    
    if (inputValue) {
        mfmf()
        lggl()
        kppk()
    }
})

// function part >

function mfmf() {
    let metertofeet = (inputValue * meter).toFixed(2)
    let feettometer = (inputValue * feet ).toFixed(2)
    meterRead.textContent = `${inputValue} meters = ${metertofeet} feet | ${inputValue} feet = ${feettometer} meters`
}

function lggl() {
    let literstogallons = (inputValue * liter).toFixed(2)
    let gallontoliter = (inputValue * gallon).toFixed(2)
    literRead.textContent = `${inputValue} liters = ${literstogallons} gallons | ${inputValue} gallons = ${gallontoliter} liters`
}

function kppk() {
    let kilotopounds = (inputValue * kilogram).toFixed(2)
    let poundstokilo = (inputValue * pound).toFixed(2)
    kiloRead.textContent = `${inputValue} kilograms = ${kilotopounds} pounds | ${inputValue} pounds = ${poundstokilo} kilograms `
}
