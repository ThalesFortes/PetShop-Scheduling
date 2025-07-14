import dayjs from "dayjs";
import { apiConfig } from "./api-config.js";

export async function fetchByDay({ date }) {
  
  try{
    const response = await fetch(`${apiConfig.baseURL}/schedules`)

    const data = await response.json()

    
    const dailyAppointments = data.filter((item) => dayjs(item.date).format("YYYY-MM-DD") === date)
    

    return dailyAppointments

  } catch (error) {
    console.log(error)
    alert("Não foi possivel buscar")
  }
}