document.addEventListener("DOMContentLoaded", () => {
  const table = document.getElementById("managerTable");

  // Delete reservation
  table.addEventListener("click", (e) => {
    if (e.target.classList.contains("btn-danger")) {
      e.target.closest("tr").remove();
      alert("❌ Reservation deleted!");
    }

    if (e.target.classList.contains("btn-warning")) {
      const row = e.target.closest("tr");
      const nameCell = row.cells[1];
      const newName = prompt("Edit customer name:", nameCell.innerText);
      if (newName) {
        nameCell.innerText = newName;
        alert("✏️ Name updated!");
      }
    }
  });
});
