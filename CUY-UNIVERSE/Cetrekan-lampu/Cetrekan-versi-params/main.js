function saklar(action,lamp){

    let lampu1 = document.getElementById("lampu1")
    let lampu2 = document.getElementById("lampu2")
    let lampu3 = document.getElementById("lampu3")

    if(action == "on"){
        if(lamp==1){
            lampu1.src="asset/onbree.png"
        }
        if(lamp==2){
            lampu2.src="asset/onbree.png"
        }
        if(lamp==3){
            lampu3.src="asset/onbree.png"
        }
        
    }
    if(action == "off"){
        if(lamp==1){
            lampu1.src="asset/offbree.png"
        }
        if(lamp==2){
            lampu2.src="asset/offbree.png"
            console.log('offbres')
        }
        if(lamp==3){
            lampu3.src="asset/offbree.png"
            
        }
        
    }
    // return lampu1;
}