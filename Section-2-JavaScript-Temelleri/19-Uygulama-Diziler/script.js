//1- Elma, Armut, Muz, Çilek elemanlarına sahip bir dizi oluşturunuz.

let meyveler = ["Elma", "Armut", "Muz", "Çilek"];

//2- Dizi kaç elamanlıdır.

console.log(meyveler.length);

//3- Dizinin ilk ve son elemanı nedir?

console.log(meyveler[0]); //ilk eleman
console.log(meyveler[meyveler.length - 1]); //son eleman

//4- Elma dizinin bir elemanımıdır ?
console.log(meyveler.includes("Elma"));
console.log(meyveler.indexOf("Elma"));

//5- Kiraz meyvesini listenin sonuna ekleyiniz
// meyveler[meyveler.length] = "Kiraz";
meyveler.push("Kiraz");
console.log(meyveler);

//6- Dizinin son 2 elemanını siliniz
// meyveler.pop();
// meyveler.pop();

meyveler.splice(meyveler.length - 2, 2);

console.log(meyveler);
//7- Aşağıdaki bilgileri dizi içerisinde saklayınız ve her öğrencinin yaşını ve not ortalamsını hesaplayınız

/**
 * Öğrenci 1: Yiğit bilgi 2010(70,60,80)
 * öğrenci 2: Ada bilgi 2012 (80,80,90)
 * Öğrenci 3: Ramazan USLU 2000 (60,60,70)
 */

let ogr1 = ["Yiğit", "Bilgi", 2010, [70, 60, 80]];
let ogr2 = ["Ada", "Bilgi", 2012, [80, 80, 90]];
let ogr3 = ["Ramazan", "Uslu", 2000, [60, 70, 80]];

let ogrenciler = [ogr1, ogr2, ogr3];

let sonuc;

let yigit_yas = new Date().getFullYear() - ogrenciler[0][2];
console.log(yigit_yas);
let ada_yas = new Date().getFullYear() - ogrenciler[1][2];
console.log(ada_yas);
let ramazan_yas = new Date().getFullYear() - ogrenciler[2][2];
console.log(ramazan_yas);
console.log("----------------------------------------------");
let yigit_not =
  (ogrenciler[0][3][0] + ogrenciler[0][3][1] + ogrenciler[0][3][2]) / 3;
console.log(yigit_not);
let ada_not =
  (ogrenciler[1][3][0] + ogrenciler[1][3][1] + ogrenciler[1][3][2]) / 3;
console.log(ada_not);
