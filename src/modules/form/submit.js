import dayjs from "dayjs";
import { newAppointment } from "../../service/new-appointment.js"
import { verifyInputs } from "../../utils/verify-inputs.js";

const form = document.querySelector("form")

const tutorName = document.getElementById("name-tutor")
const petName = document.getElementById("name-pet")
const phoneInput = document.getElementById("phone")
const descriptionService = document.getElementById("description-service")
const dateService = document.getElementById("date-service")
const hourService = document.getElementById("hour-service")

form.onsubmit = async (event) =>{
  event.preventDefault()

  try {
    const id = Math.random()
    verifyInputs(id)

    const tutor = tutorName.value.trim
    verifyInputs(tutor)

    const pet = petName.value.trim
    verifyInputs(pet)

    const phone = phoneInput.value.trim
    verifyInputs(phone)

    const description = descriptionService.value.trim
    verifyInputs(description)

    const hour = hourService.value
    const dates = dateService.value
    const date = dates + hour
    verifyInputs(date)

  } catch (error) {
    console.log(error)
    alert("Não foi possível criar novo agendamento")
  }
}