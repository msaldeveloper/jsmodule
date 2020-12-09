const NUMBER_ONE = parseInt(prompt("dame un numero"))
const NUMBER_TWO = parseInt(prompt("dame otro numero"))
if (NUMBER_ONE > NUMBER_TWO){
    console.log(`el numero ${NUMBER_ONE} es mayor`)
}else if(NUMBER_ONE===NUMBER_TWO){
    console.log(`el primer numero  ${NUMBER_ONE} es igual al segundo numero  ${NUMBER_TWO}`)
}else{
    console.log(`el numero ${NUMBER_TWO} es el mayor`)
}