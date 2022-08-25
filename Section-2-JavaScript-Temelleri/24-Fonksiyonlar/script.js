function selamlama(msg) {
  console.log(msg);
}

selamlama("React");

function yasHesapla(dogumYili) {
  return new Date().getFullYear() - dogumYili;
}
let yasRamazan = yasHesapla(2000);
console.log(yasRamazan);

function uzmanligaKacYilKaldi(dogumYili, isim) {
  let yas = yasHesapla(dogumYili);
  let kalanSene = 30 - yas;
  if (kalanSene > 0) {
    console.log(`Sayın ${isim} uzman olmanıza ${kalanSene} yıl kaldı`);
  } else {
    console.log("Zaten uzman oldunuz");
  }
}
uzmanligaKacYilKaldi(2000, "Ramazan");
