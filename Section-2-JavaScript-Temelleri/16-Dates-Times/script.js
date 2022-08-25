let simdi = new Date(); // şimdiki tarih - saat

let sonuc;

sonuc = simdi;
//get methods
sonuc = simdi.getDate(); //gün bilgisi
sonuc = simdi.getDay(); // 0: pazar 6: cumartesi
sonuc = simdi.getFullYear();
sonuc = simdi.getHours();
sonuc = simdi.getTime();

//set methods

// simdi.setFullYear(2025);
simdi.setMonth(0);
simdi.setDate(15);

sonuc = simdi;

let dogumTarihi = new Date(1990, 5, 15);

sonuc = simdi.getFullYear() - dogumTarihi.getFullYear();

let milisecond = simdi - dogumTarihi;
let saniye = milisecond / 1000;
let dakika = saniye / 60;
let saat = dakika / 60;
let gun = saat / 24;

sonuc = gun;

console.log(sonuc);
console.log(typeof sonuc);
