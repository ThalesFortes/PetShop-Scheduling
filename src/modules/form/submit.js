import dayjs from "dayjs";
import { newAppointment } from "../../service/new-appointment.js"
import { verifyInputs } from "../../utils/verify-inputs.js";
import { appointmentsLoad } from "../appointments/load.js";
import { verifyHasNumber , formatPhoneMask } from "./input-format.js";
import { hoursLoad } from "./load-hours.js";
import { fetchByDay } from "../../service/fetch-by-day.js";

const dates = document.getElementById("date")

const form = document.querySelector("form")

const tutorName = document.getElementById("name-tutor")
const petName = document.getElementById("name-pet")
const phoneInput = document.getElementById("phone")
const descriptionService = document.getElementById("description-service")
const dateService = document.getElementById("date-service")
const hourService = document.getElementById("hour-service")

const modal = document.getElementById("new-pet-scheduling")

const dateToday = dayjs(new Date()).format("YYYY-MM-DD")
dates.value = dateToday
dateService.min = dateToday


formatPhoneMask(phoneInput)



form.onsubmit = async (event) => {
  event.preventDefault()

  try {
    const id =  `${Date.now()}-${Math.floor(Math.random() * 1000)}`
    verifyInputs(id)

    const tutor = tutorName.value.trim()
    const pet = petName.value.trim()
    const phone = phoneInput.value.trim()
    const description = descriptionService.value.trim()

    verifyInputs(tutor)
    verifyHasNumber(tutor)
    verifyInputs(pet)
    verifyHasNumber(pet)
    verifyInputs(phone)
    verifyInputs(description)

    const dateOnly = dateService.value
    const timeOnly = hourService.value
    const dateTime = dayjs(`${dateOnly}T${timeOnly}`)
    const date = dateTime.toISOString()

    const now = dayjs()
    // Se for hoje e horário selecionado for anterior à hora atual
    if (dateTime.isBefore(now) && dateOnly === dateToday) {
      throw new Error("Horário inválido: não é possível agendar para um horário anterior ao atual.")
    }

    const dailyAppointments = await fetchByDay({ date: dateOnly})
    const hoursAvailable = await hoursLoad({ date: dateOnly, dailyAppointments})
    const hourInfo = hoursAvailable.find((h => h.hour === timeOnly))
 
    if (!hourInfo || !hourInfo.available){
      alert("Este horário já está ocupado ou indisponível. Escolha outro horário.")
      return
    }
    
    verifyInputs(date)

    await newAppointment({
      id,
      tutor,
      pet,
      phone,
      description,
      date
    })

    await appointmentsLoad()
    modal.classList.add("display-none")

  } catch (error) {
    console.log(error)
    alert(error)
  }
}
