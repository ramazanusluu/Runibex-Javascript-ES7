let user = {
  name: "Ramazan",
  lastname: "Uslu",
  age: 22,
  title: "React Developer",
  adres: {
    il: "hatay",
    ilce: "Antakya",
  },
  diller: ["Html", "Css"],
};

let sonuc;
sonuc = user.name;
sonuc = user.lastname;
sonuc = user.adres.il;
sonuc = user.diller[0];

console.log(sonuc);

console.log("----------------------------------------------");

let user1 = {
  name: "Ramazan",
  lastname: "Uslu",
  age: 22,
  title: "React Developer",
  adres: {
    il: "hatay",
    ilce: "Antakya",
  },
  diller: ["Html", "Css"],
};
let user2 = {
  name: "Ramazan",
  lastname: "Uslu",
  age: 22,
  title: "React Developer",
  adres: {
    il: "hatay",
    ilce: "Antakya",
  },
  diller: ["Html", "Css"],
};

let users = [user1, user2];

sonuc = users[1];
console.log(sonuc);

let frontend = [
  {
    beceri: "HTML",
    derece: "İyi",
  },
  {
    beceri: "Css",
    derece: "orta",
  },
];

sonuc = frontend[0].beceri;

console.log(sonuc);
