import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchRestaurants, refineRestaurants } from '../actions/restaurantsActions'
import './Search.scss'

class Search extends Component {
  constructor(props) {
    super(props)

    this.state = {
      searchTerm: '',
      formSubmitted: false,
      submittedTerm: '',
      refineTerm: ''
    }
  }

  handleSearchInput = (event) => {
    this.setState({
      searchTerm: event.target.value
    });
  }

  handleSearchSubmit = (event) => {
    event.preventDefault();

    const { dispatch } = this.props
    const { searchTerm } = this.state

    if (searchTerm) {
      dispatch(fetchRestaurants(searchTerm))

      this.setState({
        formSubmitted: true,
        submittedTerm: searchTerm,
        refineTerm: ''
      })
    }
  }

  handleRefineInput = (event) => {
    this.setState({
      refineTerm: event.target.value
    });
  }

  handleRefineSubmit = (event) => {
    event.preventDefault();

    const { dispatch, restaurants } = this.props
    const { refineTerm } = this.state

    dispatch(refineRestaurants(restaurants, refineTerm))
  }

  renderForm = () => {
    const { searchTerm } = this.state

    return (
      <form className="form" onSubmit={this.handleSearchSubmit}>
        <label className="form-label">Find a restaurant in your city:</label>
        <div className="form-wrapper">
          <input
            onChange={this.handleSearchInput}
            className="form-input"
            type="text" value={searchTerm}
            placeholder="Enter city name"
          />
        <input className="form-button" type="submit" value="Find" />
        </div>
      </form>
    )
  }

  handleClear = () => {
    const { dispatch } = this.props
    const { searchTerm } = this.state

    this.setState({
      refineTerm: ''
    })

    dispatch(fetchRestaurants(searchTerm))
  }

  renderRefineForm = () => {
    const { restaurants, refineSubmitted } = this.props
    const { refineTerm } = this.state

    return (
      restaurants.length > 0 || refineSubmitted ?
        <form className="form" onSubmit={this.handleRefineSubmit}>
          <label className="form-label">Refine your results by name, area, or address:</label>
          <input
            onChange={this.handleRefineInput}
            value={refineTerm}
            className="form-input"
            type="text"
            placeholder="Name, area, address"
          />
          <div className="form-button-wrapper">
            <input className="form-button" type="submit" value="Refine" />
            <input
              onClick={this.handleClear}
              className="form-button"
              type="submit"
              value="Reset"
            />
          </div>
        </form>
      : null
    )
  }

  render() {
    const { submittedTerm, formSubmitted } = this.state

    return (
      <section className="Search">
        <div className="block-content">
          {this.renderForm()}
          {this.renderRefineForm()}
          {formSubmitted &&
            <h2 className="results-message">{`Showing search results for '${submittedTerm}'`}</h2>
          }
        </div>
      </section>
    )
  }
}

const mapStateToProps = state => ({
  restaurants: state.restaurants.restaurants,
  refineSubmitted: state.restaurants.refineSubmitted
})

export default connect(mapStateToProps)(Search)
