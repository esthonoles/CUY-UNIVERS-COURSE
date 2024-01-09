// const title = document.title

/** 
console.log(document.title)
document.title = 'DOM hohoh'
console.log(document.title)
*/
/** 
const body = document.body
body.append("ehh diisi dong")

const h1 = document.createElement('h1')
// const h1=document.h1
h1.textContent="h1 bree"

const namaSaya = document.createElement('p')
namaSaya.innerHTML="saya keren"

const namaKamu = document.createElement('b')
namaKamu.innerText="kamu keren"

body.append(h1)
body.append(namaSaya)
body.append(namaKamu)
*/

// selected by id
const click = document.getElementById('btnClick')
const push = document.querySelector('.btnPush')


click.style.border='none'
click.style.padding='10px'
click.style.background='red'


function gantiWarna(){
    click.style.background='blue'
    click.style.color='white'
}

const defaultText='Click Me!'
click.textContent=defaultText
function ubahText(){
    click.textContent="auah aku di colek"
}

function balikLagi(){
    click.textContent=defaultText
}

const body =document.body
function addNama(){
    const newText=document.createElement('p')
    newText.textContent="ABD WAHID"
    body.append(newText)
    // console.log(newText)
}

function ubahWarna(){
    const ubah = document.querySelector('p')
    ubah.style.color = "red"

}