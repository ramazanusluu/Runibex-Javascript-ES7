// 1- Bir sayının 10-50 arasında olup olmadığını kontrol ediniz.

let sayi1 = 20;

if (sayi1 >= 10 && sayi1 <= 50) {
  console.log("Sayı 10 ile 50 arasındadır");
} else {
  console.log("Sayi 10 ile 50 arasında değildir");
}

console.log("------------------------------------");

// 2- Bir sayının pozitif yada tek sayı olup olmadığını kontrol ediniz

let sayi2 = 11;
if (sayi2 % 2 == 1 && sayi2 > 0) {
  console.log("Sayı pozitif tek sayıdır");
}

console.log("------------------------------------");

// 3- x,y,z sayılarının büyüklük karşılaştırmasını yapınız. (else ıf 'i araştırınız.)

let x = 10;
let y = 20;
let z = 30;

if (x > y && x > z) {
  console.log("X en büyük");
} else if (y > x && y > z) {
  console.log("Y en büyük");
} else if (z > x && z > y) {
  console.log("Z en büyük");
} else {
  console.log("Sayılar eşit");
}

console.log("------------------------------------");

// 4- 2 vize(40%) ve 1 final (60%) notuna göre heaplanan ortalama için;
//a- Eğer ortalama 50 ve üzerindeyse geçti değilse kaldı yazsın.
//b- Geçmek için ortalama 50 bile olsa final notu en az 50 olmalıdır.
//c- Finalden 70 alındığında ortalama 50'nin altında olsa bile dersten geçilsin

let vize1 = 50;
let vize2 = 60;
let final = 50;

let ortalama = ((vize1 + vize2) / 2) * 0.4 + final * 0.6;

console.log("Ortalamanız : ", ortalama);

// A şıkkı -----------------------------------------------
// if (ortalama >= 50) {
//   console.log("Geçtiniz");
// } else {
//   console.log("Kaldınız");
// }

// B şıkkı -----------------------------------------------

// if (ortalama >= 50 && final >= 50) {
//   console.log("Geçtiniz");
// } else {
//   console.log("Kaldınız");
// }

// C Şıkkı -----------------------------------------------

if (ortalama >= 50 || final >= 70) {
  console.log("Geçtiniz");
} else {
  console.log("Kaldınız");
}
