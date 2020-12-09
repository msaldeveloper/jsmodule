// Exercise 4
// pedir al usuario un numero entre 1 y 7 
// imprimir en consola el dia de la semana equivalente
// es decir:
// 1 -> lunes, 2 -> martes, etc.
alert("ejercicio cuatro")
const num_ex4 =prompt("ingresa un numero entre el 1 y el 7")
 switch(num_ex4){
     case "1":
         console.log("el dia correspondiente es lunes")
         break
         case "2":
         console.log("el dia correspondiente es martes")
         break
         case "3":
         console.log("el dia correspondiente es miercoles")
         break
         case "4":
         console.log("el dia correspondiente es jueves")
         break
         case "5":
         console.log("el dia correspondiente es viernes")
         break
         case "6":
         console.log("el dia correspondiente es sabado")
         break
         case "7":
         console.log("el dia correspondiente es domingo")
         break
         default:
             console.log("ingrese un numero del 1 al 7 sabeee")
        }