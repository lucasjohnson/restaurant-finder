import React, { Component } from 'react'
import { connect } from 'react-redux'
import Restaurant from '../components/Restaurant'

class Results extends Component {
  renderRestaurants = () => {
    const { loading, hasErrors, restaurants, searchSubmitted } = this.props
    
    if (loading) {
      return (
        <p className="loading">Loading restaurants...</p>
      )
    } else if (hasErrors) {
      return (
        <p className="loading">There was an error processing your request, please try again</p>
      )
    } else if (restaurants.length > 0) {
      return (
        restaurants.map(restaurant =>
          <Restaurant
            key={restaurant.id}
            restaurant={restaurant}
          />
        )
      )
    } else if (searchSubmitted === true){
      return (
        <p className="loading">No restaurants found matching your query, please try again</p>
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
  searchSubmitted: state.restaurants.searchSubmitted,
  refineSubmitted: state.restaurants.refineSubmitted
})

export default connect(mapStateToProps)(Results)
