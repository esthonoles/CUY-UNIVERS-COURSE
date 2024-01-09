// asyncronuos function & syncronous function

const token = ~~[Math.random()*12345678]
const pictures = [
    '1.jpg','2.jpg','3.jpg','4.jpg','5.jpg'
]
function login(username, callback){
    console.log('proses login ...')

    setTimeout(()=>{
        callback({token, username})
    },200)
    
}

function getUser(token,callback){
    console.log('processing apikey now...')
    if (token) 
    setTimeout(()=>{
        callback({apiKey:'xkey123456'})   
    },500)
    
}

function getPictures (apiKey,callback){
      if (apiKey) 
      setTimeout(()=>{
          callback ({pictures})
      },1000)
}

const user =login ("abd_wahid", function(response){
    const {token} = response
    getUser(token, function(response){
        const {apiKey}=response
        console.log(apiKey)
        getPictures(apiKey, function(response){
            const {pictures}=response
            console.log(pictures)
        })
    })
})