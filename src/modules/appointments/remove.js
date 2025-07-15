import { cancelAppointment } from "../../service/appointment-cancel.js"
import { appointmentsLoad } from "./load.js"

const list = document.querySelector("description-scheduling")

export async function  removeAppointment() {

  list.forEach(item => {
    
    item.addEventListener("click", async (event) => {
      if (event.target.tagName === "button")
      {
        const li = event.target.closest("li")
        const {id} = li.dataset

        if(id) {
          const isConfirm = confirm("Tem certeza que deseja cancelar o agendamento?")

          if (isConfirm) {
            await cancelAppointment({ id })

            appointmentsLoad()
          }
        }
        
      }

    })
    
  });
 
}