import React, { Component } from 'react'
import Search from '../components/Search'
import Results from '../components/Results'
import logo from '../logo.svg';
import './LandingPage.scss'

export default class LandingPage extends Component {
  render() {
    return (
      <div className="LandingPage">
        <a className="skip-button" href="#mainContent">Skip to main content</a>
        <main className="main-content" id="mainContent">
          <section className="Header">
            <div className="block-content">
              <img src={logo} className="logo" alt="logo" />
              <h1 className="site-title">Restaurnat Finder</h1>
              <p className="site-slug">Find restaurants in your city via the OpenTable API</p>
            </div>
          </section>
          <Search />
          <Results />
        </main>
      </div>
    )
  }
}
