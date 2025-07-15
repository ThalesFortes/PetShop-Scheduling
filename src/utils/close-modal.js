const modal = document.getElementById("new-pet-scheduling")
const blur = document.getElementById("overlay-blur")

const openModals = document.getElementById("new-scheduling")

const closeModalsOne = document.getElementById("imageCloseModal")


export function openModal ({open , modal , blur}) {
  open.addEventListener("click", (event) => {
    event.preventDefault()

    modal.classList.remove("desappear")
    modal.classList.remove("display-none")

    blur.classList.remove("display-none")
    blur.classList.remove("blur-hide")

    // forca reflow antes de aplicar animação para garantir reinicio
    void modal.offsetWidth
    modal.classList.add("appear")
    void blur.offsetWidth
    blur.classList.add("blur-show")
  })
}

export function closeModal ({close , modal , blur}) {
  close.addEventListener("click", (event) => {
    event.preventDefault()

    modal.classList.remove("appear")
    modal.classList.add("desappear")

    blur.classList.remove("blur-show")
    blur.classList.add("blur-hide")

    const handleModalEnd = (e) => {
      if (e.animationName === "modalFadeOut") {
        modal.classList.add("display-none")
        modal.removeEventListener("animationend", handleModalEnd)
      }
    }

    const handleBlurEnd = (e) => {
      if (e.animationName === "blurShouOut") {
        blur.classList.add("display-none")
        blur.removeEventListener("animationend", handleBlurEnd)
      }
    }

    modal.addEventListener("animationend", handleModalEnd)
    blur.addEventListener("animationend", handleBlurEnd)
  })
}


export function closeModalAnimated({ modal, blur }) {
  modal.classList.remove("appear")
  modal.classList.add("desappear")

  blur.classList.remove("blur-show")
  blur.classList.add("blur-hide")

  const handleModalEnd = (e) => {
    if (e.animationName === "modalFadeOut") {
      modal.classList.add("display-none")
      modal.removeEventListener("animationend", handleModalEnd)
    }
  }

  const handleBlurEnd = (e) => {
    if (e.animationName === "blurShowOut") {
      blur.classList.add("display-none")
      blur.removeEventListener("animationend", handleBlurEnd)
    }
  }

  modal.addEventListener("animationend", handleModalEnd)
  blur.addEventListener("animationend", handleBlurEnd)
}

openModal({open:openModals, modal, blur})
closeModal({close:closeModalsOne, modal, blur})
