import dayjs from "dayjs"
import { serviceHours } from "../../utils/service-hours.js"

export async function hoursLoad({ date, dailyAppointments }) {

  const unavailableHours = dailyAppointments.map((appointments) => dayjs(appointments.date).format("HH:mm"))

  const opening = serviceHours.map((hour) =>{
    const [ serviceHour ] = hour.split(":")

    const HourPast = dayjs(date).add(serviceHour, "hour").isBefore(dayjs())

    const available =  !unavailableHours.includes(hour) && !HourPast

    return {
      hour, 
      available
    }
  })

  return opening
}