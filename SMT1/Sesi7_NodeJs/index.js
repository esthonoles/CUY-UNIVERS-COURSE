const http = require('http')
const rupiah = require('rupiah-format')
const host = '127.0.0.1'
const port =  3000
// request adalah data masuk dari luar
// response adalah data dari sistem



const server = http.createServer(function(request, response){
    const nama = 'abd';
    const duit = 50000;
    const jajan = 1000;
    const sisa = duit - jajan;

    const sisaRupiah = rupiah.convert(sisa)
    const hasil = `halo nama saya ${nama}, sisa duit ${sisaRupiah}, karna tadi saya jajan Rp.${jajan}`

    response.statusCode = 201
    response.end(hasil)
});


server.listen(port, host,'', function(){
    console.log(`server berjalan di ${host}:${port}`)

})