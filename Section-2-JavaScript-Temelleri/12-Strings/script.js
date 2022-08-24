let ad = "Ramazan";
let soyad = "Uslu";
let yas = 22;
let sehir = "Hatay";

let mesaj =
  "React Developer " +
  ad +
  " " +
  soyad +
  ". " +
  sehir +
  "'da Yaşıyorum ." +
  " uzman bir react developer olamama " +
  (25 - yas) +
  " senem kaldı";

console.log(mesaj);

let mesaj2 = `React developer ${ad} ${soyad}. ${sehir}'da yaşıyorum. Uzman bir react developer olmama ${
  25 - yas
} senem kaldı.`;

console.log(mesaj2);

// Ternary Operators
let uzmanlik =
  25 - yas > 0
    ? "Uzmanlığa " + (25 - yas) + " Yıl kaldı"
    : "Zaten siz uzamnsınız";
let mesaj3 = `React developer ${ad} ${soyad}. ${sehir}'da yaşıyorum. ${uzmanlik}`;

console.log(mesaj3);
