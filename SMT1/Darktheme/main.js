let body = document.body;
const darkLimit = 5;
let darkCounter = 0;

function darkMode(){
    if(darkCounter == darkLimit){
        console.log('jata klik habis')
        return;
    }
    darkCounter += 1;
    let darkRemainingLeft = darkLimit - darkCounter;
    console.log('klik sisa:', darkRemainingLeft);

    body.classList.toggle("dark")
}