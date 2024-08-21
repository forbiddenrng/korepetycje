import React, { Component } from "react"
import "./Main.css"
import image from "../image/image.png"

class Contact extends Component {
  state = {
    showPhone: false,
    showEmail: false,
    showAnimation: false,
  }

  handleShowContact = type => {
    if (type === "phone") {
      this.setState({
        showPhone: true,
      })
    } else if (type === "email") {
      this.setState({
        showEmail: true,
      })
    }
  }

  handleCopy = e => {
    if (this.state.showAnimation) return
    if (e.target.id === "phone") {
      navigator.clipboard.writeText("691 125 830").then(() => {
        this.setState({
          showAnimation: true,
        })
      })

      setTimeout(() => {
        this.setState({
          showAnimation: false,
        })
      }, 3000)
    } else if (e.target.id === "email") {
      navigator.clipboard.writeText("antek.gawron@gmail.com").then(() => {
        this.setState({
          showAnimation: true,
        })
      })

      setTimeout(() => {
        this.setState({
          showAnimation: false,
        })
      }, 3000)
    }
  }

  render() {
    return (
      <div className="contact">
        <h3>Kontakt</h3>
        <section className="contact-wrapper">
          <div>
            <ul>
              <li>
                <i class="fa-solid fa-phone"></i>{" "}
                {!this.state.showPhone ? (
                  <button onClick={() => this.handleShowContact("phone")}>
                    Wyświetl
                  </button>
                ) : (
                  <span id="phone" onClick={this.handleCopy}>
                    691 125 830
                  </span>
                )}
              </li>
              <li>
                <i class="fa-solid fa-envelope"></i>{" "}
                {!this.state.showEmail ? (
                  <button onClick={() => this.handleShowContact("email")}>
                    Wyświetl
                  </button>
                ) : (
                  <span id="email" onClick={this.handleCopy}>
                    antek.gawron@gmail.com
                  </span>
                )}
              </li>
            </ul>
          </div>
          <div className="image">
            <img src={image} alt="ja" />
          </div>
        </section>
        <div className="animation-container">
          <div
            className={`copied${this.state.showAnimation ? " animate" : ""}`}
          >
            <span>Skopiowano</span>
            <i class="fa-solid fa-check"></i>
          </div>
        </div>
      </div>
    )
  }
}

export default Contact
