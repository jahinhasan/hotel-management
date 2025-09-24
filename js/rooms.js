document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".btn-primary");

  buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const roomName = e.target.closest(".card").querySelector(".card-title").innerText;
      alert(`You selected: ${roomName}\nNext, confirm reservation.`);
      // Later: save to database session
    });
  });
});
