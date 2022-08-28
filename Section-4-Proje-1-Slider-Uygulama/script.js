const models = [
  {
    name: "Skoda",
    image: "img/resim-1.jpg",
    link: "https://www.pexels.com/tr-tr/",
  },
  {
    name: "Renault",
    image: "img/resim-2.jpg",
    link: "https://www.pexels.com/tr-tr/",
  },
  {
    name: "Ford",
    image: "img/resim-3.jpg",
    link: "https://www.pexels.com/tr-tr/",
  },
  {
    name: "Opel",
    image: "img/resim-4.jpg",
    link: "https://www.pexels.com/tr-tr/",
  },
  {
    name: "Bmw",
    image: "img/resim-5.jpg",
    link: "https://www.pexels.com/tr-tr/",
  },
];

let index = 1;

document.querySelector(".card-title").textContent = models[index].name;

document
  .querySelector(".card-img-top")
  .setAttribute("src", models[index].image);

document.querySelector(".card-link").setAttribute("href", models[index].link);
