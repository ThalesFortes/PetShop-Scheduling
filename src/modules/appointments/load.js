import { fetchByDay } from "../../service/fetch-by-day.js"

const date = document.getElementById("date")

export async function appointmentsLoad () {

  const dailyAppointments = await fetchByDay({ date })
  
}