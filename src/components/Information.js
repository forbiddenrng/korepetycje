import React from "react"
import "./Information.css"

const days = [
  { id: 0, name: "Poniedziałek", available: true, hours: "08:00 - 22:00" },
  { id: 1, name: "Wtorek", available: true, hours: "08:00 - 22:00" },
  { id: 2, name: "Środa", available: true, hours: "08:00 - 22:00" },
  { id: 3, name: "Czwartek", available: true, hours: "08:00 - 22:00" },
  { id: 4, name: "Piątek", available: true, hours: "08:00 - 22:00" },
  { id: 5, name: "Sobota", available: true, hours: "08:00 - 22:00" },
  { id: 6, name: "Niedziela", available: false, hours: "08:00 - 22:00" },
]

const Calendar = () => {
  const daysList = days.map(day => (
    <div className={`day${day.available ? "" : " unavail"}`} key={day.id}>
      <span>{day.name}</span>
      <span>{day.hours}</span>
    </div>
  ))

  return <div className="calendar">{daysList}</div>
}

const Information = () => {
  return (
    <div className="info">
      <div className="left">
        <div className="hours">
          <h3>
            <i class="fa-regular fa-calendar"></i>Dostępność
          </h3>
          <Calendar />
        </div>
      </div>
      <div className="right">
        <div className="price"></div>
        <div className="scope"></div>
        <div className="place"></div>
      </div>
    </div>
  )
}

export default Information
