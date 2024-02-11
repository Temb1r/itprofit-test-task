export function initializeModal() {
  const modal = document.querySelector(".modal");
  const openModalBtn = document.querySelector(".login");
  const closeModalBtn = document.querySelector(".close");
  const body = document.querySelector("body");

  openModalBtn.addEventListener("click", () => {
    modal.style.display = "block";
    body.style.overflow = "hidden";
  });

  closeModalBtn.addEventListener("click", () => {
    modal.style.display = "none";
    body.style.overflow = "visible";
  });

  window.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.style.display = "none";
      body.style.overflow = "visible";
    }
  });
}
