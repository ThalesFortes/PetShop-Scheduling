import { cancelAppointment } from "../../service/appointment-cancel.js"
import { appointmentsLoad } from "./load.js"

export function setupDeleteHandler (listId){
  const list = document.getElementById(listId)
  console.log(list)
  list.addEventListener("click", async (event) => {
    console.log(event.target)
    if (event.target.tagName === "BUTTON") {
      const li = event.target.closest("li")
      if (!li) return

      const { id } = li.dataset
      if (!id) return

      const isConfirm = confirm("Tem certeza que deseja cancelar o agendamento?")
      if (isConfirm) {
        await cancelAppointment( {id} )
        appointmentsLoad()
      }
    }
  })
}

setupDeleteHandler("morning-list")
setupDeleteHandler("afternoon-list")
setupDeleteHandler("night-list")