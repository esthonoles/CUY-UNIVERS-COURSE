/*
!PERULANGAN DI JAVASCRIPT
? for, for of, for in, foreach

*while & do while
**/

//!for of = untuk dapatin value

//for in = untuk dapatin index

//foreach = untuk

const nama=['doni','sule',
'hasan','bakri','karmin','jono']

for (let names in nama){
    console.log(names)
} 

nama.forEach((names,index)=>{
    console.log(names,index+1)
})

nama.map((names,index)=>{
    console.log(names,index+1)
})