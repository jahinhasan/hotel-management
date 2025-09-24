document.getElementById("bookingForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("customerName").value;
  const roomType = document.getElementById("roomType").value;
  const checkIn = document.getElementById("checkIn").value;
  const checkOut = document.getElementById("checkOut").value;

  // Later you will send this data to MySQL using backend (PHP/Node.js)
  alert(`Booking Confirmed!\n\nName: ${name}\nRoom: ${roomType}\nCheck-In: ${checkIn}\nCheck-Out: ${checkOut}`);

  // Reset form
  document.getElementById("bookingForm").reset();
});
