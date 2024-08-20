import React from "react"
import "./Navigation.css"

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <button className="active">O mnie</button>
        </li>
        <li>
          <button>Doświadczenie</button>
        </li>
        <li>
          <button>Kontakt</button>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
