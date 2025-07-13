import dayjs from "dayjs"


const morningList = document.getElementById("morning-list")
const afternoonList = document.getElementById("afternoon-list")
const nightList = document.getElementById("night-list")

export function viewAppointementsList ({ dailyAppointments }) {
  morningList.innerHTML = ""
  afternoonList.innerHTML = ""
  nightList.innerHTML = ""

  try {
    dailyAppointments.forEach((appointments) => {

      const hourAppointments = dayjs(appointments.date).hour()

      const li = document.createElement("li")
      li.classList.add("description-scheduling")
      li.setAttribute("data-id", appointments.id)

      const div = document.createElement("div")

      const hours = document.createElement("strong")
      hours.classList.add("hour")
      hours.textContent = hourAppointments

      const strong = document.createElement("strong")
      strong.textContent = appointments.pet

      const span = document.createElement("span")
      span.textContent = appointments.tutor

      div.append(hours, strong, span)

      const p = document.createElement("p")
      p.textContent = appointments.description 

      const button = document.createElement("button")
      button.textContent = "Remover agendamento"

      li.append(div, p, button)

      if (hourAppointments <= 12){
        morningList.appendChild(li)
      } else if (hourAppointments >= 13) {
        afternoonList.appendChild(li)
      } else {
        nightList.appendChild(li)
      }
         
    });

  } catch (error) {
    console.log(error)
    alert("Não foi possível gerar a lista")
  }

}

 /* 
  <li class="description-scheduling">
    <div>
      <strong class="hour">09:00</strong>
      <strong>Animal Nome</strong>
      <span>/ Médico nome</span>
    </div> 
      <p>Descrição</p>
    <button>Remover agendamento</button>
  </li>
*/ 