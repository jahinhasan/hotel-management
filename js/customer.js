document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("customerForm");
  const output = document.createElement("div");
  output.className = "alert alert-success mt-3 d-none";
  form.parentNode.appendChild(output);

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    output.innerHTML = `✅ Thank you, <b>${name}</b>! Your information has been saved. Proceed to choose a room.`;
    output.classList.remove("d-none");

    // Later: send data to PHP/MySQL with fetch()
    console.log("Customer Data:", {
      name,
      email,
      phone: document.getElementById("phone").value,
      nationality: document.getElementById("nationality").value,
      address: document.getElementById("address").value,
    });
  });
});
