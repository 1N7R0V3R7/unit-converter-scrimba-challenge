const inputEl = document.getElementById("input-el");
const lengthEl = document.getElementById("length-el");
const volumeEl = document.getElementById("volume-el");
const massEl = document.getElementById("mass-el");

setInterval(() => {
    render();
}, 0);

function render() {
    lengthEl.textContent = `${inputEl.value} meters = ${(inputEl.value*3.281).toFixed(3)} feet | ${inputEl.value} feet = ${(inputEl.value/3.281).toFixed(3)} meters`;
    volumeEl.textContent = `${inputEl.value} liters = ${(inputEl.value/3.785).toFixed(3)} gallons | ${inputEl.value} gallons = ${(inputEl.value*3.785).toFixed(3)} liters`;
    massEl.textContent = `${inputEl.value} kilos = ${(inputEl.value*2.205).toFixed(3)} pounds | ${inputEl.value} pounds = ${(inputEl.value/2.205).toFixed(3)} kilos`;
}
