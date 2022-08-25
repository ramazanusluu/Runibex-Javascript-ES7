let toplam = 0;

for (let i = 0; i <= 10; i++) {
  toplam += i;
}

console.log(toplam);

//---------------------------------------------------------

let sayilar = [1, 4, 8, 5, 3, 12, 8, 7, 5];

let toplamDizi = 0;

for (let i = 0; i < sayilar.length; i++) {
  toplamDizi += sayilar[i];
}
// console.log(toplamDizi);

let forIn = 0;

for (let index in sayilar) {
  forIn += sayilar[index];
}
console.log(forIn);

let forOf = 0;

for (let sayi of sayilar) {
  forOf += sayi;
}
console.log(forOf);

let user = {
  name: "Ramazan",
  lastname: "Uslu",
  username: "React",
  password: "12345",
  email: "react@gmail.com",
};

for (const key in user) {
  console.log(user[key]);
}
