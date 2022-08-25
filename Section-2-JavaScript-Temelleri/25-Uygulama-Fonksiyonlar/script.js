// 1- Kendisine gönderilen kelimeyi belirtilen kez ekranda yazan fonksiyonu yazınız

function kelimeYazdir(kelime, adet) {
  for (let i = 0; i < adet; i++) {
    console.log(kelime);
  }
}
kelimeYazdir("React Developer", 5);
console.log("----------------------------------------------");

// 2- Dikdörtgenin alan ve çevresini hesaplayan fonksiyonu yazınız.

function alanCevreHesapla(kisa, uzun) {
  let alan = kisa * uzun;
  let cevre = (kisa + uzun) * 2;
  return `Alan: ${alan} - Cevre: ${cevre}`;
}

let sonuc = alanCevreHesapla(7, 10);
console.log(sonuc);
console.log("----------------------------------------------");

// 3- Yazı tura uygulamasını fonksiyon kullanarak yazınız

function yaziTuraAt() {
  let random = Math.random(); // 0-1
  if (random < 0.5) {
    console.log("Yazi");
  } else {
    console.log("Tura");
  }
  console.log(random);
}
yaziTuraAt();

console.log("----------------------------------------------------");

// 4- Kendisine gönderilen bir sayının tam bölenlerini dizi şeklinde döndüren fonksiyonu yazınız

function tamBolenler(sayi) {
  let sayilar = [];
  for (let i = 2; i < sayi; i++) {
    if (sayi % 1 == 0) {
      sayilar.push(i);
    }
  }
  return sayilar;
}

console.log(tamBolenler(15));
console.log("----------------------------------------------");
// 5 - Değişen sayıda parametre alan toplam isminde bir fonksiyon yazınız

// function toplam(a, b) {
//   return a + b;
// }
// console.log(toplam(2, 5));

function toplam() {
  let sonuc = 0;
  for (let i = 0; i < arguments.length; i++) {
    sonuc += arguments[i];
  }
  return sonuc;
}
console.log(toplam(2, 5));
console.log(toplam(2, 5, 7));
