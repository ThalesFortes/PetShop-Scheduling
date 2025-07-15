const modal = document.getElementById("new-pet-scheduling")
const blur = document.getElementById("overlay-blur")

const openModals = document.getElementById("new-scheduling")

const closeModalsOne = document.getElementById("imageCloseModal")


export function openModal ({open , modal , blur}) {
  open.addEventListener("click", (event) => {
    event.preventDefault()
    modal.classList.remove("display-none")
    blur.classList.remove("display-none")
  })
}

export function closeModal ({close , modal , blur}) {
  close.addEventListener("click", (event) => {
    event.preventDefault()
    modal.classList.add("display-none")
    blur.classList.add("display-none")
  })
}

openModal({open:openModals, modal, blur})
closeModal({close:closeModalsOne, modal, blur})
