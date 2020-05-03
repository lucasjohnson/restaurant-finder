import React, { Component } from 'react'
import { connect } from 'react-redux'
import Restaurant from '../components/Restaurant'

class Results extends Component {
  renderRestaurants = () => {
    const { loading, hasErrors, restaurants, formSubmitted } = this.props

    if (loading) {
      return (
        <p className="loading">Loading restaurants...</p>
      )
    } else if (hasErrors) {
      return (
        <p className="loading">There was an error processing your request, please try again</p>
      )
    } else if (formSubmitted && restaurants.length === 0) {
      return (
        <p className="loading">No restaurants found matching your query, please try again</p>
      )
    } else {
      return (
        restaurants.map(restaurant =>
          <Restaurant
            key={restaurant.id}
            restaurant={restaurant}
          />
        )
      )
    }
  }

  render() {
    return (
      <ul className="restaurant-items">
        {this.renderRestaurants()}
      </ul>
    )
  }
}

const mapStateToProps = state => ({
  hasErrors: state.restaurants.hasErrors,
  loading: state.restaurants.loading,
  restaurants: state.restaurants.restaurants,
  formSubmitted: state.restaurants.formSubmitted
})

export default connect(mapStateToProps)(Results)
