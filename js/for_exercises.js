for(let i = 10;i>0;i--){ 
    let tabla = 8 * i
    console.log(`8 x ${i} = ${tabla}`)
}
for(let i = 1;i<=100;i++){ 
   if(i%2===0){
       console.log(i)

   }
}
let str = "reverse"
let rev=""
for(i=str.length -1;i>=0;i--){
    rev = rev.concat(str[i])
}
console.log(rev)

