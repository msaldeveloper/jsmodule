// Exercise 5
// pedir al usuario un numero entre 1 y 12
// Imprimir en consola el numero de días que corresponden a ese mes
// p.ej.
// 5 -> 31 días
alert("ejercicio cinco")
const num_ex5 = prompt("ingrese un numero entre el 1 y el 12 para clacular cuantos dias tiene")
switch (num_ex5) {
    case "1":
        console.log("enero 31 dias")
        break
    case "2":
        console.log("febrero 28 dias")
        break
    case "3":
        console.log("marzo 31 dias")
        break
    case "4":
        console.log("abril 30 dias")
        break
    case "5":
        console.log("mayo 31 dias")
        break
    case "6":
        console.log("junio 30 dias")
        break
    case "7":
        console.log("julio 31 dias")
        break
    case "8":
        console.log("agosto 31 dias")
        break
    case "9":
        console.log("septiembre 30 dias")
        break
    case "10":
        console.log("octubre 31 dias")
        break
    case "11":
        console.log("noviembre 30 dias")
        break
    case "12":
        console.log("diciembre 31 dias")
        break
        default:
            console.log("ingresa un numero del 1 al 12")
}