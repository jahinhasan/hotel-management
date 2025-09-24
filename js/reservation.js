document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("reservationForm");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const checkin = document.getElementById("checkin").value;
    const checkout = document.getElementById("checkout").value;

    if (new Date(checkout) <= new Date(checkin)) {
      alert("⚠️ Check-out must be after Check-in date.");
      return;
    }

    alert(`✅ Reservation confirmed!\nCheck-in: ${checkin}\nCheck-out: ${checkout}`);

    // Later: POST to PHP/MySQL
    console.log("Reservation:", { checkin, checkout });
  });
});
