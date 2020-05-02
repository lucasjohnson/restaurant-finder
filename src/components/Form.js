import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchRestaurants } from '../actions/restaurantsActions'
import { Restaurant } from '../components/Restautant'

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: ''
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
  }

  renderForm = () => {
    const { searchTerm } = this.state
    const { restaurants } = this.props

    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <input className="form-input" type="text" value={searchTerm} onChange={this.handleChange} placeholder="Find Food by city" />
        <input className="form-button" type="submit" value="Find" />
        {restaurants.length > 0 &&
          <label>Refine results:
             <input className="form-input" type="text" placeholder="Refine your search" />
           </label>
        }
      </form>
    )
  }

  renderRestaurants = () => {
    const { loading, hasErrors, restaurants } = this.props;

    if (loading) {
      return <p className="loading">Loading restaurants...</p>
    } else if (hasErrors) {
      return <p className="loading">No restaurants found, please try again</p>
    } else {
      return restaurants.map(restaurant => <Restaurant key={restaurant.id} restaurant={restaurant} />)
    }
  }

  render() {
    return (
      <section className="LandingPage">
        <h1 className="title">Food App</h1>
        {this.renderForm()}
        <ul className="restaurant-items">
          {this.renderRestaurants()}
        </ul>
      </section>
    )
  }
}

const mapStateToProps = state => ({
  loading: state.restaurants.loading,
  restaurants: state.restaurants.restaurants,
  hasErrors: state.restaurants.hasErrors
})

export default connect(mapStateToProps)(Form)
