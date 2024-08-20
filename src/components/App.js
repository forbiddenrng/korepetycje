import React, { Component } from "react"
import "./App.css"

import Navigation from "./Navigation"

class App extends Component {
  state = {}
  render() {
    return (
      <div className="app">
        <div className="container">
          <h1>Korepetycje matematyka</h1>
          <div className="navigation">
            <Navigation />
          </div>
        </div>
      </div>
    )
  }
}

export default App
