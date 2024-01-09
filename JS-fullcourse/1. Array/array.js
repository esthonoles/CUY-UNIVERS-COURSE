// 
// 🚀 🚗 🚌 🚆 🚢 ⛵ 🚣 

const array1=['🚀','🚗','🚌']
const array2=['🚆','🚢','⛵','🚣']

// merge array (concat)

const arrayMerge=array1.concat(array2)
console.log(arrayMerge)

// mapping array

const datas =[
    {
        name:"jumadilkoir",
        stack:'js reack dll',
        age:22
    },{
        name:'jenkin koeswanto',
        stack:'Nodejs Nextjs',
        age:30
    },
    {
        name:'abd wahid',
        stack:'react, vuejs, nodejs',
        age:25,
    },
    {
        name:'kang aciso',
        stack:'ui ux, design, html, css, js, php, java',
        age:34
    }
]
 
// datas.map((values,index)=>{
//     console.log(values)
// })
// // 

// tampilkan berdasarkan urutan umur dari terkecil

// datas.sort((a,b)=>a.age-b.age).map((values)=>console.log(values))

// // // filter data berdasarkan kategori
// datas.filter((x)=>x.age>=30).map((values)=>console.log(values))

// atau bisa di percantik kaya 
datas
.filter((x)=>x.age<30)
.sort((a,b)=>a.age-b.age)
.map((values)=>console.log(values))