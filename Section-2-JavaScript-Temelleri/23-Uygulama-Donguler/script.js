let sayilar = [1, 5, 7, 15, 3, 25, 12, 24];

//1- Sayilar listesindeki her bir elemanın karesini yazdırınız.

for (let sayi of sayilar) {
  console.log(sayi * sayi);
}
console.log("---------------------------------------------------");

//2- Sayilar listesindeki hangi sayılar 5'in katıdır?

for (let i = 0; i < sayilar.length; i++) {
  if (sayilar[i] % 5 == 0) {
    console.log(sayilar[i]);
  }
}

console.log("---------------------------------------------------");

//3- sayilar listesindeki çift sayılarin toplamını bulunuz ?
let toplam = 0;
for (const i in sayilar) {
  if (sayilar[i] % 2 == 0) {
    toplam += sayilar[i];
  }
}
console.log(toplam);

console.log("---------------------------------------------------");

let frontend = ["html", "css", "javascript", "react", "angular", "react next"];

//4- frontnd listesindeki tüm elemanları büyük harf ile yazdırınız

for (const front of frontend) {
  console.log(front.toUpperCase());
}
console.log("---------------------------------------------------");

//5- urunler listesinde react geçen kaç eleman vardır ?
let adet = 0;

for (const front of frontend) {
  if (front.includes("react")) {
    adet++;
  }
}

console.log(adet);
console.log("---------------------------------------------------");

let ogrenciler = [
  {
    ad: "yiğit",
    soyad: "bilgi",
    notlar: [60, 70, 60],
  },
  {
    ad: "ada",
    soyad: "bilgi",
    notlar: [50, 70, 60],
  },
  {
    ad: "çınar",
    soyad: "bilgi",
    notlar: [90, 70, 60],
  },
];

// ogrenciler listesindeki her öğrencinin not ortalaması ve başarı durumlarını yazdırınız

for (const ogrenci of ogrenciler) {
  let notToplam = 0;
  let ortalama = 0;
  let adet = 0;
  for (const not of ogrenci.notlar) {
    notToplam += not;
    adet++;
  }
  ortalama = notToplam / adet;
  console.log(
    `${ogrenci.ad} ${ogrenci.soyad} isimli öğrencinin not ortalaması : ${ortalama}.`
  );
  if (ortalama >= 50) {
    console.log("Başarılı");
  } else {
    console.log("başarısız");
  }
}

// tüm öğrencilerin not ortalamsı kaçtır
