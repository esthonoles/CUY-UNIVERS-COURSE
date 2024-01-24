let passwordLenght = document.getElementById('password-lenght')
let password = document.getElementById('password')
let saveButton = document.getElementById('savebtn')

function generatePassword(len){
    const lower = 'abcdefghijklmnopqrstuvwxyz'
    const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const numeric = '0123456789'
    // const symbol = '!@#$%^&*()_+{}[]|;:,.<>?'

    const data = lower + upper + numeric

    let generator='';

    for(let i=0; i<len; i++){
        generator +=  data[~~(Math.random() * data.length)]
    }
        return generator
}

function getPassword(){
    const newPassword = generatePassword(passwordLenght.value)
    password.value = newPassword
}

function savePassword(){
    const alert = document.getElementById('alert')
    saveButton.setAttribute('href','data:text/plain;charset=utf-8,'+encodeURIComponent(`password saya : ${password.value}`))
    saveButton.setAttribute('download','password.txt')
    alert.classList.remove('d-none')

    setTimeout(()=>{
        location.reload()
        
    }, 3000)
}