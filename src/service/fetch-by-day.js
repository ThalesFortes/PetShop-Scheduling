import dayjs from "dayjs";
import { apiConfig } from "./api-config.js";

export async function fetchByDay({ date }) {
  
  try{
    const response = await fetch(`${apiConfig.baseURL}/schedules`)

    const data = await response.json()

    const dailyAppointments = data.filter((appointments) => {
      dayjs(date).isSame(appointments.date, "day")
    })

    return dailyAppointments

  } catch (error) {
    console.log(error)
    alert("Não foi possivel buscar")
  }
}