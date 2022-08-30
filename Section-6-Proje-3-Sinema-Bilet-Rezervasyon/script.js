const container = document.querySelector(".container");
const count = document.getElementById("count");
const amount = document.getElementById("amount");
const select = document.getElementById("movie");
const seats = document.querySelectorAll(".seat:not(reserved)");

//Uygulama yüklnediği anda çağrılsın
getFromLocalStorage();
calculateTotal();

container.addEventListener("click", function (e) {
  if (
    e.target.classList.contains("seat") &&
    !e.target.classList.contains("reserved")
  ) {
    e.target.classList.toggle("selected");
    calculateTotal();
  }
});

function calculateTotal() {
  const selectedSeat = container.querySelectorAll(".seat.selected");
  const selectedSeatsArr = [];
  const seatsArr = [];
  selectedSeat.forEach(function (seat) {
    selectedSeatsArr.push(seat);
  });
  //spread

  seats.forEach(function (seat) {
    seatsArr.push(seat);
  });

  let selectedSeatIndexs = selectedSeatsArr.map(function (seat) {
    return seatsArr.indexOf(seat);
  });

  let selectedSeatCount = selectedSeat.length;
  count.innerText = selectedSeatCount;
  amount.innerText = selectedSeatCount * select.value;

  saveToLocalStorage(selectedSeatIndexs);
}

select.addEventListener("change", function (e) {
  calculateTotal();
});

function saveToLocalStorage(index) {
  localStorage.setItem("selectedSeats", JSON.stringify(index));
  localStorage.setItem("selectedMovieIndex", select.selectedIndex);
}

function getFromLocalStorage() {
  const selectedSeats = JSON.parse(localStorage.getItem("selectedSeats"));
  if (selectedSeats !== null && selectedSeats.length > 0) {
    seats.forEach(function (seat, index) {
      if (selectedSeats.indexOf(index) > -1) {
        seat.classList.add("selected");
      }
    });
  }
  const selectedMovieIndex = localStorage.getItem("selectedMovieIndex");
  if (selectedMovieIndex !== null) {
    select.selectedIndex = selectedMovieIndex;
  }
}
