import dayjs from "dayjs";
import { newAppointment } from "../../service/new-appointment.js"
import { verifyInputs } from "../../utils/verify-inputs.js";
import { appointmentsLoad } from "../appointments/load.js";


const dates = document.getElementById("date")

const form = document.querySelector("form")

const tutorName = document.getElementById("name-tutor")
const petName = document.getElementById("name-pet")
const phoneInput = document.getElementById("phone")
const descriptionService = document.getElementById("description-service")
const dateService = document.getElementById("date-service")
const hourService = document.getElementById("hour-service")




const dateToday = dayjs(new Date()).format("YYYY-MM-DD")
const hourToday = dayjs(new Date()).format("HH:mm")
dates.value = dateToday
dates.min = dateToday
dateService.min = dateToday


form.onsubmit = async (event) => {
  event.preventDefault()

  try {
    const id =  `${Date.now()}-${Math.floor(Math.random() * 1000)}`
    verifyInputs(id)

    const tutor = tutorName.value.trim()
    const pet = petName.value.trim()
    const phone = phoneInput.value.trim()
    const description = descriptionService.value.trim()

    const nameRegex = /^[A-Za-zÀ-ÿ\s]+$/
    if (!nameRegex.test(tutor)) throw new Error("Nome do tutor inválido")
    if (!nameRegex.test(pet)) throw new Error("Nome do pet inválido")

    verifyInputs(tutor)
    verifyInputs(pet)
    verifyInputs(phone)
    verifyInputs(description)

    const dateOnly = dateService.value
    const timeOnly = hourService.value
    const dateTime = dayjs(`${dateOnly}T${timeOnly}`)
    const date = dateTime.toISOString()

    verifyInputs(date)

    console.log("Data formatada:", date)

    await newAppointment({
      id,
      tutor,
      pet,
      phone,
      description,
      date
    })

    await appointmentsLoad()

  } catch (error) {
    console.log(error)
    alert("Não foi possível criar novo agendamento")
  }
}
