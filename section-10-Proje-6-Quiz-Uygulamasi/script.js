function Soru(soruMetni, cevapSecenekleri, dogruCevap) {
  this.soruMetni = soruMetni;
  this.cevapSecenekleri = cevapSecenekleri;
  this.dogruCevap = dogruCevap;
}

Soru.prototype.cevabıKontrolEt = function (cevap) {
  return cevap === this.dogruCevap;
};

let sorular = [
  new Soru(
    "1-Hangisi javascript paket yönetim uygulamasıdır",
    {
      a: "Node.js",
      b: "Typescript",
      c: "Npm",
      d: "Nuget",
    },
    "c"
  ),
  new Soru(
    "2-Hangisi javascript paket yönetim uygulamasıdır",
    {
      a: "Node.js",
      b: "Typescript",
      c: "Npm",
    },
    "c"
  ),
  new Soru(
    "3-Hangisi javascript paket yönetim uygulamasıdır",
    {
      a: "Node.js",
      b: "Typescript",
      c: "Npm",
    },
    "c"
  ),
  new Soru(
    "4-Hangisi javascript paket yönetim uygulamasıdır",
    {
      a: "Node.js",
      b: "Typescript",
      c: "Npm",
    },
    "c"
  ),
];

function Quiz(sorular) {
  this.sorular = sorular;
  this.soruIndex = 0;
}

Quiz.prototype.soruGetir = function () {
  return this.sorular[this.soruIndex];
};

const quiz = new Quiz(sorular);

document.querySelector(".btn-start").addEventListener("click", function () {
  document.querySelector(".quiz-box").classList.add("active");
  soruGoster(quiz.soruGetir());
  document.querySelector(".next-btn").classList.remove("show");
});

document.querySelector(".next-btn").addEventListener("click", function () {
  if (quiz.sorular.length != quiz.soruIndex + 1) {
    quiz.soruIndex += 1;
    soruGoster(quiz.soruGetir());
    document.querySelector(".next-btn").classList.remove("show");
  } else {
    console.log("Quiz Bitti");
  }
});

const option_list = document.querySelector(".option_list");
const correctIcon = '<div class="icon"><i class="fa-solid fa-check"></i></div>';
const inCorrectIcon =
  '<div class="icon"><i class="fa-solid fa-xmark"></i></div>';

function soruGoster(soru) {
  let question = `<span>${soru.soruMetni}</span>`;
  let options = "";
  for (let cevap in soru.cevapSecenekleri) {
    options += `
    <div class="option">
      <span><b>${cevap}</b>: ${soru.cevapSecenekleri[cevap]}</span>
    </div>
    `;
  }
  document.querySelector(".question_text").innerHTML = question;

  option_list.innerHTML = options;
  const option = option_list.querySelectorAll(".option");
  for (let opt of option) {
    opt.setAttribute("onclick", "optionSelected(this)");
  }
}
function optionSelected(option) {
  let cevap = option.querySelector("span b").textContent;
  let soru = quiz.soruGetir();
  if (soru.cevabıKontrolEt(cevap)) {
    option.classList.add("correct");
    option.insertAdjacentHTML("beforeend", correctIcon);
  } else {
    option.classList.add("incorrect");
    option.insertAdjacentHTML("beforeend", inCorrectIcon);
  }
  for (let i = 0; i < option_list.children.length; i++) {
    option_list.children[i].classList.add("disabled");
  }
  document.querySelector(".next-btn").classList.add("show");
}
