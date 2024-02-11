import { submitForm } from "./ajaxFormSubmit";

export function validateForm() {
  const form = document.querySelector(".contact-form");
  const phoneInput = form.querySelector(".phone");

  const maskOptions = {
    mask: "+{375}(00)000-00-00",
  };
  const mask = IMask(phoneInput, maskOptions);

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Предотвращаем отправку формы по умолчанию

    // Проверяем валидность каждого поля
    const nameInput = form.querySelector(".name");
    const emailInput = form.querySelector(".email");
    const messageInput = form.querySelector(".message");

    let isValid = true;

    // Проверка имени
    if (!nameInput.value.trim()) {
      showError(nameInput, "Please enter your name.");
      isValid = false;
    } else {
      hideError(nameInput);
    }

    // Проверка email
    if (!emailInput.value.trim()) {
      showError(emailInput, "Please enter your email.");
      isValid = false;
    } else if (!isValidEmail(emailInput.value.trim())) {
      showError(emailInput, "Please enter a valid email address.");
      isValid = false;
    } else {
      hideError(emailInput);
    }

    // Проверка телефона
    if (!phoneInput.value.trim()) {
      showError(phoneInput, "Please enter your phone number.");
      isValid = false;
    } else {
      hideError(phoneInput);
    }

    // Проверка сообщения
    if (!messageInput.value.trim()) {
      showError(messageInput, "Please enter your message.");
      isValid = false;
    } else {
      hideError(messageInput);
    }

    // Если форма валидна, можно отправить данные
    if (isValid) {
      // Ваш код для отправки формы, например, с помощью AJAX
      console.log("Form is valid. Submitting data...");
      submitForm(form);
    }
  });

  function showError(input, errorMessage) {
    const errorDiv = input.parentElement.nextElementSibling;
    errorDiv.textContent = errorMessage;
    errorDiv.style.display = "block";
  }

  function hideError(input) {
    const errorDiv = input.parentElement.nextElementSibling;
    errorDiv.textContent = "";
    errorDiv.style.display = "none";
  }

  function isValidEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  }
}

document.addEventListener("DOMContentLoaded", validateForm);
