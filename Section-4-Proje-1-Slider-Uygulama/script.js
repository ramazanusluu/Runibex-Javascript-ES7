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

let index = 0;
let slayCount = models.length;

showSlide(index);

//-------------------------------------------------------------------

document
  .querySelector(".fa-circle-left")
  .addEventListener("click", function () {
    index--;
    showSlide(index);
    console.log(index);
  });

document
  .querySelector(".fa-circle-right")
  .addEventListener("click", function () {
    index++;
    showSlide(index);
    console.log(index);
  });

function showSlide(i) {
  index = i;

  if (i < 0) {
    index = slayCount - 1;
  }
  if (i >= slayCount) {
    index = 0;
  }

  document.querySelector(".card-title").textContent = models[index].name;

  document
    .querySelector(".card-img-top")
    .setAttribute("src", models[index].image);

  document.querySelector(".card-link").setAttribute("href", models[index].link);
}
