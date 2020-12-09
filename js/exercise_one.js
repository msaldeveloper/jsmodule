// Exercise 1
// 1. pedir al usuario la calificación de un examen ( 0 a 100) 
// Imprimir en consola las equivalencias en letra su calificación, es decir
// -> si es mayor o igual a 90, imprimir "A"
// -> si es mayor o igual a 80 y menor que 90 , imprimir "B"
// -> si es mayor o igual a 70 y menor que 80 , imprimir "C"
// -> si es mayor o igual a 60 y menor que 70 , imprimir "D"
// -> si es mayor o igual a 50 y menor que 60 , imprimir "E"
// -> si es menor 50 , imprimir "F"


const cal_alumno = prompt("ingresa tu calificacion del 0 al 100 para saber si aprobaste")
if(cal_alumno >= 90){
    console.log("tu calificacion es A")
}else if(cal_alumno >= 80 && cal_alumno < 90){
    console.log("tu calificacion es B")

}else if(cal_alumno >= 70 && cal_alumno < 80){
    console.log("tu calificacion es C")

}else if(cal_alumno >= 60 && cal_alumno < 70){
    console.log("tu calificacion es D")

}else if(cal_alumno >= 50 && cal_alumno < 60){
    console.log("tu calificacion es E")

}else{
    console.log("tu calificacion es F estas bien reprobado")

}