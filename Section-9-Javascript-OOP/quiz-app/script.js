// OOP: Nesne Tabanlı Programlama
//Object

// let soru = {
//   soruMetni: "Hangisi javascript paket yönetim uygulamasıdır",
//   cevapSecenekleri: {
//     a: "Node.js",
//     b: "Typescript",
//     c: "Npm",
//   },
//   dogruCevap: "c",
//   cevabıKontrolEt: function (cevap) {
//     return cevap === this.dogruCevap;
//   },
// };

// let soru2 = {
//   soruMetni: "Hangisi .net paket yönetim uygulamasıdır",
//   cevapSecenekleri: {
//     a: "Node.js",
//     b: "nuget",
//     c: "Npm",
//   },
//   dogruCevap: "b",
//   cevabıKontrolEt: function (cevap) {
//     return cevap === this.dogruCevap;
//   },
// };

// console.log(soru.soruMetni);
// console.log(soru.cevabıKontrolEt("c"));

// Sınıf, Constructor => nesne * 30
// ES5, ES6, ES7

//-------------------------------------------------------------------

function Soru(soruMetni, cevapSecenekleri, dogruCevap) {
  this.soruMetni = soruMetni;
  this.cevapSecenekleri = cevapSecenekleri;
  this.dogruCevap = dogruCevap;
  this.cevabıKontrolEt = function (cevap) {
    return cevap === this.dogruCevap;
  };
}

let soru1 = new Soru(
  "Hangisi javascript paket yönetim uygulamasıdır",
  {
    a: "Node.js",
    b: "Typescript",
    c: "Npm",
  },
  "c"
);
let soru2 = new Soru(
  "Hangisi .net paket yönetim uygulamasıdır",
  {
    a: "Node.js",
    b: "nuget",
    c: "Npm",
  },
  "b"
);

console.log(soru1.soruMetni);
console.log(soru1.dogruCevap);

console.log(soru2.doruMetni);
console.log(soru2.dogruCevap);
console.log(soru1.cevabıKontrolEt("c"));

//-------------------------------------------------------------------

let sorular = [
  new Soru(
    "Hangisi javascript paket yönetim uygulamasıdır",
    {
      a: "Node.js",
      b: "Typescript",
      c: "Npm",
    },
    "c"
  ),
  new Soru(
    "Hangisi javascript paket yönetim uygulamasıdır",
    {
      a: "Node.js",
      b: "Typescript",
      c: "Npm",
    },
    "c"
  ),
];

console.log(sorular[0]);
for (let s of sorular) {
  console.log(s.soruMetni);
}
