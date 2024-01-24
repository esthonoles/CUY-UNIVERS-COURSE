const body = document.body
function hitungSegitiga(){
   
   let alas = parseInt(document.getElementById('alasSegitiga').value)
   let tinggi =parseInt(document.getElementById('tinggiSegitiga').value)

    var hasilku= 0.5*(alas+tinggi)

    document.getElementById('hasilsegitiga').innerHTML=
    hasilku+" cm"
   
}

function luasLingkaran(){
    let jariJari = parseInt(document.getElementById('jariJari').value)
    var luas = 3.14*(jariJari*jariJari)

    document.getElementById('luas').innerHTML=luas+" cm"
}

function clearLingkaran(){
    document.getElementById('jariJari').reset();
}