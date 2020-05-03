import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchRestaurants, refineRestaurants } from '../actions/restaurantsActions'

class Form extends Component {
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

  handleSearch = (event) => {
    event.preventDefault();

    const { dispatch } = this.props
    const { searchTerm } = this.state

    dispatch(fetchRestaurants(searchTerm))

    this.setState({
      formSubmitted: true,
      submittedTerm: searchTerm
    })
  }

  handleRefineInput = (event) => {
    this.setState({
      refineTerm: event.target.value
    });
  }

  handleRefine = (event) => {
    event.preventDefault();

    const { dispatch, restaurants } = this.props
    const { refineTerm } = this.state

    dispatch(refineRestaurants(restaurants, refineTerm))
  }

  renderForm = () => {
    const { searchTerm } = this.state

    return (
      <form className="form" onSubmit={this.handleSearch}>
        <label className="form-label">City:
          <input
            onChange={this.handleSearchInput}
            className="form-input"
            type="text" value={searchTerm}
            placeholder="Find Food by city"
          />
        </label>
        <input className="form-button" type="submit" value="Find" />
      </form>
    )
  }

  renderRefineForm = () => {
    const { restaurants } = this.props

    return (
      restaurants.length > 0 &&
        <form className="form" onSubmit={this.handleRefine}>
          <label className="form-label">Refine results:
            <input
              onChange={this.handleRefineInput}
              className="form-input"
              type="text"
              placeholder="Refine your search"
            />
          </label>
          <input className="form-button" type="submit" value="Refine" />
        </form>
    )
  }

  render() {
    const { submittedTerm, formSubmitted } = this.state

    return (
      <section className="LandingPage">
        <h1 className="title">Food App</h1>
        {this.renderForm()}
        {this.renderRefineForm()}
        {formSubmitted &&
          <h2 className="subtitle">{`Showing search results for '${submittedTerm}'`}</h2>
        }
      </section>
    )
  }
}

const mapStateToProps = state => ({
  restaurants: state.restaurants.restaurants
})

export default connect(mapStateToProps)(Form)
