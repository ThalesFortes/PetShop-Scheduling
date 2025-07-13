import { viewAppointementsList } from "./appointments/view.js"
import { fetchByDay } from "../service/fetch-by-day.js"



export async function a (){
  const dailyAppointments = await fetchByDay()
    viewAppointementsList({dailyAppointments})
}

document.addEventListener("DOMContentLoaded",  function () {
  console.log("OI")
  a()

})