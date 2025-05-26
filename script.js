document.getElementById("userForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent default form submission

  // Clear previous errors
  document.getElementById("nameError").textContent = "";
  document.getElementById("emailError").textContent = "";
  document.getElementById("ageError").textContent = "";

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const age = document.getElementById("age").value.trim();

  let isValid = true;

  // Name validation
  if (name === "") {
    document.getElementById("nameError").textContent = "Name is required.";
    isValid = false;
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    document.getElementById("emailError").textContent = "Please enter a valid email.";
    isValid = false;
  }

  // Age validation
  if (age === "") {
    document.getElementById("ageError").textContent = "Age is required.";
    isValid = false;
  } else if (isNaN(age) || age < 0 || age > 120) {
    document.getElementById("ageError").textContent = "Please enter a valid age (0–120).";
    isValid = false;
  }

  // If form is valid
  if (isValid) {
    alert("Form submitted successfully!");
    // You can also send data to the server here using fetch or AJAX
    // Reset form if needed: document.getElementById("userForm").reset();
  }
});
