// OOP: Nesne Tabanlı Programlama
//Object

let soru = {
  soruMetni: "Hangisi javascript paket yönetim uygulamasıdır",
  cevapSecenekleri: {
    a: "Node.js",
    b: "Typescript",
    c: "Npm",
  },
  dogruCevap: "c",
  cevabıKontrolEt: function (cevap) {
    return cevap === this.dogruCevap;
  },
};

let soru2 = {
  soruMetni: "Hangisi .net paket yönetim uygulamasıdır",
  cevapSecenekleri: {
    a: "Node.js",
    b: "nuget",
    c: "Npm",
  },
  dogruCevap: "b",
  cevabıKontrolEt: function (cevap) {
    return cevap === this.dogruCevap;
  },
};

console.log(soru.soruMetni);
console.log(soru.cevabıKontrolEt("c"));
console.log(soru2.soruMetni);
console.log(soru2.cevabıKontrolEt("c"));

// Sınıf, Constructor => nesne * 30
// ES5, ES6, ES7
