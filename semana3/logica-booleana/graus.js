const grauCelsiusFarennheit = 9/5-32
const grauFarenheitCelsius = 9/5+32
const grauFarenheitKelvin = 5/9+273.15
const grauKelvinFarenheit = 5/9-273.15

let resultadoFK = (77-32)*grauFarenheitKelvin
console.log(resultadoFK + " ºK ")
let resultadoCF = (80)*grauCelsiusFarennheit
console.log(resultadoCF + " ºF ")
let resultadoCF2 = 30*grauCelsiusFarennheit
console.log(resultadoCF2 + "°F")
resultadoCK = resultadoCF2-grauCelsiusFarennheit
console.log(resultadoCK + "°K")
let grau = prompt("Quantos graus quer converter?")
grau = Number(grau)
resultadoCF2 = grau*grauCelsiusFarennheit
console.log(resultadoCF2 + "°F")
resultadoCK = resultadoCF2-grauFarenheitKelvin
console.log(resultadoCK + "°K")





