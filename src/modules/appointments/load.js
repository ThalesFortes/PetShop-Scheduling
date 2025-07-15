import { fetchByDay } from "../../service/fetch-by-day.js"
import { hoursLoad } from "../form/load-hours.js"
import { viewAppointementsList } from "./view.js"

const selectedDate = document.getElementById("date")

export async function appointmentsLoad () {

  const date = selectedDate.value

  const dailyAppointments = await fetchByDay({ date })
  
  viewAppointementsList({ dailyAppointments })

  hoursLoad({ date , dailyAppointments})
}