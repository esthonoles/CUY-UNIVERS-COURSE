


// cara 1 keyword new function
const sum1 = new Function('a', 'b', 'console.log (a + b)')

// cara 2 - standar function
function sum2(a, b) {
    console.log(a + b)
}

// cara 3 - arrow function
const sum3 =(a,b)=>{
    console.log(a+b)
}

// get random number
function randomize(){
    const randomNumber =~~(Math.random()*1000)
    if(randomNumber>250){
        console.log('banyak ege lebih', randomNumber)
    }else{
        console.log('yaggg dikit')
    }
    
}

randomize()

sum1(1, 2)
sum2(3,4)
sum3(4,5)