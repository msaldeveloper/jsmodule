
function nameRequest(){
    let nombre = prompt("ingresa tu nombre")
    //sentencias
    console.log(nombre)
    
}

function nameReverse(var1, var2){
    console.log(var1+var2)

}
let var1 = parseInt(prompt("ingresa un numero"))
let var2 =parseInt(prompt("ingresa otro numero"))
nameReverse(var1,var2)


function nameReverse(var3){
    
    for(let i = 1;i<=10;i++){ 
        let tabla = var3 * i
        console.log(`${var3} x ${i} = ${tabla}`)
    }

}
let var3 =parseInt(prompt("ingresa un numero para ver su tabla de multiplicar"))
nameReverse(var3)



function strLengh(sizestr){
    
    console.log(sizestr.length)
}

let sizestr = prompt("ingresa un texto para saber su longitud")
strLengh(sizestr)



function concatstr(con1,con2){
    conca = con1.concat(con2)
    console.log(conca)
}
let con1 = prompt("ingresa un texto para concatenar")
let con2 = prompt("ingresa otro texto para concatenar")
concatstr(con1,con2)

function homework(){

str = "sdadfwxzad@gmail.com";
res = str.indexOf("@");
let nuevo_string = str.slice(0,res);
let asteriscos = "*";
let asteriscos_2 = asteriscos.repeat(res - 1);
let string_modificado = str.replace(nuevo_string, asteriscos_2);
console.log(string_modificado);
}