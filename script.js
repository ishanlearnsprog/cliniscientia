// modal

const modal = document.getElementById("modal");
const modalBackground = document.getElementById("modal-background");

const openModalBtns = document.querySelectorAll(".modal-open");
const closeModalBtns = document.querySelectorAll(".modal-close");

function openModal(e) {
    modalBackground.classList.remove("modal-hide");
    modal.classList.remove("modal-hide");
    console.log("Opening Modal");
}

function closeModal() {
    modalBackground.classList.add("modal-hide");
    modal.classList.add("modal-hide");
    console.log("Closing Modal");
}

closeModalBtns.forEach((e) => {
    e.addEventListener("click", closeModal);
});


openModalBtns.forEach((e) => {
    e.addEventListener("click", openModal);
});

console.log(modal, modalBackground, openModalBtns, closeModalBtns);
