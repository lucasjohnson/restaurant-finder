import React, { Component } from 'react'
import Form from '../components/Form'

export default class LandingPage extends Component {
  render() {
    return (
      <div className="App">
        <a className="skip-button" href="#mainContent">Skip to main content</a>
        <main id="mainContent">
          <Form />
        </main>
      </div>
    )
  }
}
