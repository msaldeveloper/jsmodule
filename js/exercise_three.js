// Exercise 3
// pedir al usuario por prompt un numero entre 1 y 100
// verificar si es un par o impar
// imprimir en resultado en consola
alert("ejercicio tres")
const num_ex3 = prompt("ingresa un numero del 0 al 100 para saber si es par o impar")
const res_ex3 = num_ex3 % 2
if(res_ex3 === 0){
    console.log("tu numero es par")
}else{
    console.log("tu numero es impar")
}