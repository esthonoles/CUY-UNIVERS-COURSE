

function ruangTamu() {
    let togleTamu = document.getElementById('toggle-tamu');

    const lampuTamu = document.getElementsByClassName('lampu-tamu');

    console.log(lampuTamu.length)
    
    for (let i=0; i<lampuTamu.length; i++) {
        lampuTamu[i].src = togleTamu.checked ? 'asset/onbree.png' : 'asset/offbree.png'
    }
}

function ruangKeluarga(){
    let toggleKeluarga = document.getElementById('toggle-keluarga');
    const lampuKeluarga = document.getElementsByClassName('lampu-keluarga');

    console.log(lampuKeluarga.length)

    for (let i=0; i<lampuKeluarga.length; i++){
        lampuKeluarga[i].src = toggleKeluarga.checked ? 'asset/onbree.png' : 'asset/offbree.png'
    }

}

function ruangTidur(){
    let toggleTidur = document.getElementById('toggle-tidur');
    const lampuTidur = document.getElementsByClassName('lampu-tidur');

    console.log(lampuTidur.length)

    for (let i=0; i<lampuTidur.length; i++){
        lampuTidur[i].src = toggleTidur.checked ? 'asset/onbree.png' : 'asset/offbree.png'
    }
}

function ruangMakan(){
    let toggleMakan = document.getElementById('toggle-makan');
    let lampuMakan = document.getElementById('lampu-makan');

    toggleMakan.checked ? lampuMakan.src='asset/onbree.png' : lampuMakan.src = 'asset/offbree.png'
}


