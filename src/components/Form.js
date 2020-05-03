import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchRestaurants } from '../actions/restaurantsActions'

class Form extends Component {
  constructor(props) {
    super(props)

    this.state = {
      searchTerm: '',
      formSubmitted: false,
      submittedTerm: ''
    }
  }

  handleChange = (event) => {
    this.setState({
      searchTerm: event.target.value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const { dispatch } = this.props
    const { searchTerm } = this.state

    dispatch(fetchRestaurants(searchTerm))

    this.setState({
      formSubmitted: true,
      submittedTerm: searchTerm
    })
  }

  renderForm = () => {
    const { searchTerm } = this.state
    const { restaurants } = this.props

    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <label className="form-label">City:
          <input
            onChange={this.handleChange}
            className="form-input"
            type="text" value={searchTerm}
            placeholder="Find Food by city"
          />
        </label>
        <input className="form-button" type="submit" value="Find" />
        {restaurants.length > 0 &&
          <label className="form-label">Refine results:
             <input
               onChange={this.handleRefine}
               className="form-input"
               type="text"
               placeholder="Refine your search"
              />
           </label>
        }
      </form>
    )
  }

  render() {
    const { submittedTerm, formSubmitted } = this.state

    return (
      <section className="LandingPage">
        <h1 className="title">Food App</h1>
        {this.renderForm()}
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
