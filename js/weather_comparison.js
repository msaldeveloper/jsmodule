/* 
1-pedir al usuario que ingrese como esta el clima
2-imprimir en consola una descripcion acorde al estado del dia
3- opciones 
    a-soleado
    b-lluvioso
    c-nevando
    d-nublado
4-si no esta nunguna de esas opciones 
5-pedir una descripcion de su dia e imprimirla en consola
*/
alert("opciones de clima ##SOLEADO##    ##LLUVIOSO##    ##NEVANDO##    ##NUBLADO##    ##OTRO## ")
let weather =prompt("ingresa como esta el clima")
if(weather==="soleado"){
    console.log("el dia esta soleado sal a dar un paseo")
}else if(weather==="lluvioso"){
    console.log("el dia esta lluvioso sera mejor que salgas con paraguas")
}
else if(weather==="nevando"){
    console.log("el dia esta nevando ponte un abrigo")
}
else if(weather==="nublado"){
    console.log("el dia esta nublado mejor abrigate y llevate un paraguas")
}
else{
    alert("el clima es diferente?")
    weather = prompt("ingresa una descripcion del clima")
    console.log(weather)

}
