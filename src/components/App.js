import React, { Component } from "react"
import "./App.css"

import Navigation from "./Navigation"

class App extends Component {
  state = {
    activeSectionID: 0,
  }

  handleActive = id => {
    this.setState(prevstate => ({
      activeSectionID: id,
    }))
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
        </div>
      </div>
    )
  }
}

export default App
