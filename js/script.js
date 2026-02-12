const dismissButton = document.getElementById("dismiss-button");
const subscriptionSuccessModal = document.querySelector(
  ".subscription-success-modal",
);

const form = document.querySelector(".subscription-form");
const emailInput = document.getElementById("email-input");
const errorMessage = form.querySelector(".error");

emailInput.addEventListener("input", () => {
  if (emailInput.validity.valid) {
    errorMessage.textContent = "";
    errorMessage.classList.remove("active");
  } else {
    showError(emailInput, errorMessage);
  }
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!emailInput.validity.valid) {
    showError(emailInput, errorMessage);
  } else {
    subscriptionSuccessModal.querySelector("strong").textContent =
      emailInput.value;
    subscriptionSuccessModal.classList.remove("hidden");
    document.body.classList.add("modal-open");
  }
});

dismissButton.addEventListener("click", () => {
  subscriptionSuccessModal.classList.add("hidden");
  document.body.classList.remove("modal-open");
});

function showError(input, errorElement) {
  if (input.validity.valueMissing) {
    errorElement.textContent = "Email required";
  } else if (input.validity.typeMismatch) {
    errorElement.textContent = "Entered value needs to be an email address";
  } else if (input.validity.tooShort) {
    errorElement.textContent = `Email should be at least ${input.minLength} characters; 
    you entered ${input.value.length}.`;
  }
  errorElement.classList.add("active");
}
