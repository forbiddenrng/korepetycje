import React from "react"
import "./Navigation.css"

const Navigation = props => {
  const id = props.activeSection
  return (
    <nav>
      <ul>
        <li>
          <button
            onClick={() => props.click(0)}
            className={id === 0 ? "active" : ""}
          >
            O mnie
          </button>
        </li>
        <li>
          <button
            onClick={() => props.click(1)}
            className={id === 1 ? "active" : ""}
          >
            Informacje
          </button>
        </li>
        <li>
          <button
            onClick={() => props.click(2)}
            className={id === 2 ? "active" : ""}
          >
            Kontakt
          </button>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
