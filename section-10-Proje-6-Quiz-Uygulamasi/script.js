const ui = new UI();

const quiz = new Quiz(sorular);

ui.btn_start.addEventListener("click", function () {
  ui.quiz_box.classList.add("active");
  ui.soruGoster(quiz.soruGetir());
  ui.soruSayisiniGoster(quiz.soruIndex + 1, quiz.sorular.length);
  ui.btn_next.classList.remove("show");
});

ui.btn_next.addEventListener("click", function () {
  if (quiz.sorular.length != quiz.soruIndex + 1) {
    quiz.soruIndex += 1;
    ui.soruGoster(quiz.soruGetir());
    ui.btn_next.classList.remove("show");
    ui.soruSayisiniGoster(quiz.soruIndex + 1, quiz.sorular.length);
  } else {
    console.log("Quiz Bitti");
  }
});

function optionSelected(option) {
  let cevap = option.querySelector("span b").textContent;
  let soru = quiz.soruGetir();
  if (soru.cevabıKontrolEt(cevap)) {
    option.classList.add("correct");
    option.insertAdjacentHTML("beforeend", ui.correctIcon);
  } else {
    option.classList.add("incorrect");
    option.insertAdjacentHTML("beforeend", ui.inCorrectIcon);
  }
  for (let i = 0; i < ui.option_list.children.length; i++) {
    ui.option_list.children[i].classList.add("disabled");
  }
  ui.btn_next.classList.add("show");
}

