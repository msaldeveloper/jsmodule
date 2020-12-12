/*
 escribir una funcion que a partir del String
"987"
imprimir las tablas de multiplicar en ese orden 
tabla del 9 
del 8 
del 7
 */

 let numeros = "987"
 function tablas(numeros){
    for(let i=0; i<numeros.length;i++){
        
        
            for(let j=1; j < 11 ; j++){
                console.log(`${numeros[i] } x ${j} = ${numeros[i]*j}`)
            }
    }
 }
 tablas(numeros)

/* 
 escribir una funcion que dado un string como parametro 
 --> "anita lava la tina"
 verifique si es o ni un palindromo
--> "anita lava la tina"
is palindrome("anita lava la tina")
anita lava la tinaes un palindromo */


function isPalindrime(stringPalindrome){

    const word = stringPalindrome.replace(/ /g, "")
    let wordReversed= ""
    for(let i = word.length -1;i >= 0; i--){
        wordReversed += word[i]
        console.log(wordReversed)
    }
    console.log(wordReversed)
    if(word===wordReversed){
        console.log("es un palindromo")
    }else{
        console.log("no es un palindromo")
    }
}
isPalindrime("anita lava la tina")

// escribir una funcion que dados 2 parametros
// me imprima en consola los tipos de datos que son
// getDataType (1, "2")
// -> number, string
// typeof 


function tipoDato(dato1,dato2){
    console.log(typeof(dato1), typeof(dato2))

}
tipoDato(3,"hola")