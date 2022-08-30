const container = document.querySelector(".container");
const count = document.getElementById("count");
const amount = document.getElementById("amount");
const select = document.getElementById("movie");
const seats = document.querySelectorAll(".seat:not(reserved)");

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
  localStorage.setItem("selectedMovieIndex",select.selectedIndex);
}
