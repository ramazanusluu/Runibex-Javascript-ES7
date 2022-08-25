let sonuc;

sonuc = 10;
sonuc = "10";
sonuc = Number("10");
sonuc = parseInt("10.6");
sonuc = parseFloat("10.6");
sonuc = parseInt("10a");
sonuc = parseInt("a10");

sonuc = isNaN("10");
// 10a sayısal bir değer değil mi? sayısal ise false değilse true

let sayi = 15.123456789;

sonuc = sayi.toPrecision(5);
sonuc = sayi.toFixed(5);

sonuc = Math.round(2.6);
sonuc = Math.round(2.6);
sonuc = Math.ceil(2.6);
sonuc = Math.floor(2.6);
sonuc = Math.sqrt(25);
sonuc = Math.pow(2, 3);
sonuc = Math.abs(-10);
sonuc = Math.min(4, 5, 9, 8, 1, 5);
sonuc = Math.max(4, 5, 9, 8, 1, 5);
sonuc = Math.random() * 10;
sonuc = Math.floor(Math.random() * 100);

console.log(typeof sonuc);
console.log(sonuc);
