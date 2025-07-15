const modal = document.getElementById("new-pet-scheduling")
const closeModal = document.getElementById("imageCloseModal")
const blurModal = document.getElementById("overlay-blur")

const openModal = document.getElementById("new-scheduling")

closeModal.addEventListener("click", () => {
  modal.classList.add("display-none")
  blurModal.classList.add("display-none")
})

openModal.addEventListener("click", (event) => {
  event.preventDefault()
  blurModal.classList.remove("display-none")
  modal.classList.remove("display-none")
})

