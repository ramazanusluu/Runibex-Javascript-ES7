var isim = "Ahmet"; // global scope
const deger = "Frontend developer";

function yazdir() {
  var isim = "React";
  var yas = 22;
  console.log("Function scope", isim, yas);
}

if (true) {
  let isim = "Next.js";
  console.log(isim);
}
// console.log(yas);

console.log(isim);
yazdir();

// Fonksiyonlar kendi scope alanlarını oluşturur.
// block içerisinde yeni bir scope oluşmaz (let, const)
