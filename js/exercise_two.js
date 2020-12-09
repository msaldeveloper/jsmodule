// Exercise 2
// pedir al usuario por prompt un numero entre 1 y 100
// comparar si ese numero es divisible entre 2 y 11 e imprimir en consola un mensaje indicandolo
// sino, enviar un mensaje negandolo
alert("ejercicio 2")
const number = prompt("ingresa un numero del 0 al 100")
resultado = number % 2
resultado_dos = number % 11
 
if(resultado === 0 && resultado_dos === 0){
    console.log("tu numero es divisible entre 2")
    console.log("y entre 11")

}else if(resultado === 0 ){
    console.log("tu numero solo es divisible entre 2")
    

}else if(resultado_dos === 0){
    
    console.log("tu numero solo es divisioble entre 11")

}else{
    console.log("tu numero no es divisible entre 2 ni 11")
}