
let saldoAwal= prompt("Masukkan saldo awal")
let saldoTambahan = prompt("Masukkan saldo tambahan")

let saldoAkhir = parseInt(saldoAwal) + parseInt(saldoTambahan)

alert(`Total saldo akhir Rp.${saldoAkhir}`)


// to showing day
const weekday=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
let day = weekday[new Date().getDay()]

console.log(`hari ini adalah hari ${day}`) // console.log(day)