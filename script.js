// modal

const modal = document.getElementById("modal");
const modalBackground = document.getElementById("modal-background");
const form = document.querySelector(".contact-form"); 

const openModalBtns = document.querySelectorAll(".modal-open");
const closeModalBtns = document.querySelectorAll(".modal-close");

const contactInfo = document.querySelectorAll(".fel-box input");

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

function submitContact(e) {
    e.preventDefault();
    console.log("You pressed submit!!!");
}

closeModalBtns.forEach((e) => {
    e.addEventListener("click", closeModal);
});

openModalBtns.forEach((e) => {
    e.addEventListener("click", openModal);
});

form.addEventListener("submit", submitContact);
