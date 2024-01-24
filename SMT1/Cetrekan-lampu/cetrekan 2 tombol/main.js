function saklar(params){

    let lampu1 = document.getElementById("lampu1")

    if(params == "on"){
        lampu1.src="asset/onbree.png"
    }
    if(params == "off"){
        lampu1.src="asset/offbree.png"
    }
    return lampu1;
}