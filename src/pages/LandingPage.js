import React, { Component } from 'react'
import Search from '../components/Search'
import Results from '../components/Results'

export default class LandingPage extends Component {
  render() {
    return (
      <div className="App">
        <a className="skip-button" href="#mainContent">Skip to main content</a>
        <main id="mainContent">
          <Search />
          <Results />
        </main>
      </div>
    )
  }
}
