import { validateForm } from "./formValidation";
import { initializeModal } from "./modalWindow";

initializeModal();
const form = document.querySelector(".contact-section form");
validateForm(form);
