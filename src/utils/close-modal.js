const modal = document.getElementById("new-pet-scheduling")
const closeModal = document.getElementById("imageCloseModal")

const openModal = document.getElementById("new-scheduling")

closeModal.addEventListener("click", () => {
  modal.classList.add("display-none")
})

openModal.addEventListener("click", (event) => {
  event.preventDefault()
  modal.classList.remove("display-none")
})

