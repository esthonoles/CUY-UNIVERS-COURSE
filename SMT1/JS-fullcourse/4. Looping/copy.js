// asyncronuos function & syncronous function

const token = ~~[Math.random()*12345678]
const pictures = [
    '1.jpg','2.jpg','3.jpg','4.jpg','5.jpg'
]
function login(username){
    console.log('processing token user now...')
    return new Promise((success, failed) => {
        setTimeout(() => {
           if(username != 'abd_wahid') failed('user wrong data')
           success({token})
        },200)
    })   
}

function getUser(token){
    console.log('processing apikey now...')
    return new Promise((success, failed) => {
        if (!token) failed ("sory no token, Cannot Access")
        setTimeout(() => {
            success({apiKey:'xkey123456'})
        },500)
    })
}

function getPictures (apiKey){
    return new Promise((success, failed) => {
        if (!apiKey) failed ("no apikey, cannot access!")
      setTimeout(() => {
        success({ pic: pictures })
      },1000)
    })
      
}

// const user = login('abd_wahid')
// // console.log(user)
// user.then(function(response){
//    const {token} = response
//    getUser(token).then(function(response){
//         console.log({response})
//         const {apiKey}=response
//         console.log(apiKey)
//    }).catch(err=> console.log(err))
// }).catch(err=> console.log(err))

// cara bener kan ya !!
// USING ASYN Function
async function userDisplay(){
    try{
    const user = await login('abd_wahid')
    const {apiKey} = await getUser(token)
    const {pic} = await getPictures(apiKey)
    
    console.log(`
    token anda adalah : ${token}
    apikey anda adalah : ${apiKey}
    hasil request gambar anda berikut ini :${pic}`)
    
    }catch (err){
        console.log(err)
    }

}
userDisplay()

