import React, { Component } from "react"
import "./App.css"

import Navigation from "./Navigation"
import AboutMe from "./AboutMe"
import Information from "./Experience"
import Contact from "./Contact"

class App extends Component {
  state = {
    activeSectionID: 0,
  }

  handleActive = id => {
    this.setState(prevstate => ({
      activeSectionID: id,
    }))
  }

  getContent = () => {
    const id = this.state.activeSectionID
    if (id === 0) return <AboutMe />
    else if (id === 1) return <Information />
    else if (id === 2) return <Contact />
  }

  render() {
    return (
      <div className="app">
        <div className="container">
          <h1>Korepetycje matematyka</h1>
          <div className="navigation">
            <Navigation
              click={this.handleActive}
              activeSection={this.state.activeSectionID}
            />
          </div>
          <section className="main">{this.getContent()}</section>
        </div>
      </div>
    )
  }
}

export default App
