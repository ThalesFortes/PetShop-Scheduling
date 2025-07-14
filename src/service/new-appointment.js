import { apiConfig } from "./api-config.js"

export async function newAppointment({ id, tutor, pet, description, phone, date }) {
  try {
    await fetch (`${apiConfig}/schedules`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ id, tutor, pet, description, phone, date })
    })

     alert("Agendamento realizado com sucesso!")
  } catch (error){
    console.log(error)
    alert("Não foi possível agendar. Tente novamente mais tarde.")
  }
}