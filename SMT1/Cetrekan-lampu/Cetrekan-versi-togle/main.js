function saklar(lamp){
    let toggle1 = document.getElementById("default-toggle1")
    let toggle2 = document.getElementById("default-toggle2")
    let toggle3 = document.getElementById("default-toggle3")

    let lampu1 = document.getElementById("lampu1")
    let lampu2 = document.getElementById("lampu2")
    let lampu3 = document.getElementById("lampu3")

    toggle1.checked ?  lampu1.src="asset/onbree.png" : lampu1.src="asset/offbree.png" ;

    toggle2.checked ?  lampu2.src="asset/onbree.png" : lampu2.src="asset/offbree.png" ;

    toggle3.checked ?  lampu3.src="asset/onbree.png" : lampu3.src="asset/offbree.png" ;

    // if(toggle1.checked){
    //     // if(lamp==1){
    //         lampu1.src="asset/onbree.png"
    //     // }
    //     // if(lamp==2){
    //     //     lampu2.src="asset/onbree.png"
    //     // }
    //     // if(lamp==3){
    //     //     lampu3.src="asset/onbree.png"
    //     // }
    // }else{
    //     // if(lamp==1){
    //         lampu1.src="asset/offbree.png"
    //     // }
    //     // if(lamp==2){
    //     //     lampu2.src="asset/offbree.png"
    //     //     console.log('offbres')
    //     // }
    //     // if(lamp==3){
    //     //     lampu3.src="asset/offbree.png"
            
    //     // }
    // }



   

    // if(action == "on"){
    //     if(lamp==1){
    //         lampu1.src="asset/onbree.png"
    //     }
    //     if(lamp==2){
    //         lampu2.src="asset/onbree.png"
    //     }
    //     if(lamp==3){
    //         lampu3.src="asset/onbree.png"
    //     }
        
    // }
    // if(action == "off"){
    //     if(lamp==1){
    //         lampu1.src="asset/offbree.png"
    //     }
    //     if(lamp==2){
    //         lampu2.src="asset/offbree.png"
    //         console.log('offbres')
    //     }
    //     if(lamp==3){
    //         lampu3.src="asset/offbree.png"
            
    //     }
        
    // }
    // return lampu1;
}