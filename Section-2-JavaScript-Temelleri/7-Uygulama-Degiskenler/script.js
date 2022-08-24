let ogrenci1Ad = "Ada";
let ogrenci1Soyad = "Bilgi";
let ogrenci1DogumTarihi = "2012";
let ogrenci1Matematik1 = 70;
let ogrenci1Matematik2 = 70;
let ogrenci1Matematik3 = 80;

let ogrenci2Ad = "Yiğit";
let ogrenci2Soyad = "Bilgi";
let ogrenci2DogumTarihi = "2010";
let ogrenci2Matematik1 = 40;
let ogrenci2Matematik2 = 40;
let ogrenci2Matematik3 = 50;
let suakiYil = new Date().getFullYear();
console.log("suan ki yil", suakiYil);

// let ogr1_yas = 2022 - parseInt(ogrenci1DogumTarihi);
// console.log(ogr1_yas);

let ogr1_yas = suakiYil - parseInt(ogrenci1DogumTarihi);
console.log(ogr1_yas);

let ogr2_yas = suakiYil - parseInt(ogrenci2DogumTarihi);
console.log(ogr2_yas);

let ogr1_ort =
  (ogrenci1Matematik1 + ogrenci1Matematik2 + ogrenci1Matematik3) / 3;
console.log(typeof ogr1_ort);
console.log(parseInt(ogr1_ort));

let ogr2_ort =
  (ogrenci2Matematik1 + ogrenci2Matematik2 + ogrenci2Matematik3) / 3;
console.log(ogr2_ort);
console.log(parseInt(ogr2_ort));

console.log(ogr1_ort >= 50 );
console.log(ogr2_ort >= 50 );