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
let settings = {
  duration: "2000",
  random: false,
};
var interval;

init(settings);

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

//-------------------------------------------------------------------

function init(settings) {
  let prev;
  interval = setInterval(function () {
    if (settings.random) {
      //random index
      do {
        index = Math.floor(Math.random() * slayCount);
      } while (index == prev);

      prev = index;
    } else {
      //artan index
      if (slayCount == index + 1) {
        index = -1;
      }
      showSlide(index);
      console.log(index);
      index++;
    }

    showSlide(index);
  }, settings.duration);
}

document.querySelectorAll(".arrow").forEach(function (item) {
  item.addEventListener("mouseenter", function () {
    clearInterval(interval);
  });
});
document.querySelectorAll(".arrow").forEach(function (item) {
  item.addEventListener("mouseleave", function () {
    init(settings);
  });
});
