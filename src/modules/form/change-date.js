import { appointmentsLoad } from "../appointments/load.js"


const selectedDate = document.getElementById("date")

selectedDate.onchange = () =>  appointmentsLoad()