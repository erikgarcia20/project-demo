const movie = document.getElementById("movie");
const seatsContainer = document.getElementById("seats");
const total = document.getElementById("total");
const countText = document.getElementById("count");
const seatMsg = document.getElementById("seatMsg");
const confirmBtn = document.getElementById("confirmBtn");
const payment = document.getElementById("payment");
const finalMsg = document.getElementById("finalMsg");
let selectedSeats = [];
movie.addEventListener("change", () => {
  seatsContainer.classList.toggle("hidden", movie.value === "");
  selectedSeats = [];
  updateUI();
});
document.querySelectorAll(".seat").forEach(seat => {
  seat.addEventListener("click", () => {
    if (seat.classList.contains("taken")) {
      seatMsg.textContent = "This seat is unavailable";
      return;
    }
    seatMsg.textContent = "";
    if (seat.classList.contains("selected")) {
      seat.classList.remove("selected");
      selectedSeats = selectedSeats.filter(s => s !== seat);
    } else {
      seat.classList.add("selected");
      selectedSeats.push(seat);
    }
    updateUI();
  });
});
function updateUI() {
  const count = selectedSeats.length;
  countText.textContent = count > 0 ? `You selected ${count} seat(s)` : "";
  total.textContent = count * (movie.value || 0);
}
confirmBtn.addEventListener("click", () => {
  if (selectedSeats.length > 0) {
    payment.classList.remove("hidden");
  }
});
document.querySelectorAll(".pay").forEach(btn => {
  btn.addEventListener("click", () => {
    finalMsg.textContent = "Payment confirmed. Print ticket.";
    payment.classList.add("hidden");
  });
});