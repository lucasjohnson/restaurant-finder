import React, { Component } from 'react'
import { connect } from 'react-redux'
import Restaurant from '../components/Restaurant'
import logo from '../logo.svg';
import './Results.scss'

class Results extends Component {
  renderRestaurants = () => {
    const { loading, hasErrors, restaurants, searchSubmitted } = this.props

    if (loading) {
      return (
        <div>
          <img src={logo} className="logo" alt="Loading icon" />
          <p className="loading-message">Loading restaurants...</p>
        </div>
      )
    } else if (hasErrors) {
      return (
        <p className="results-message">There was an error processing your request, please try again</p>
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
        <p className="results-message">No restaurants found matching your query, please try again</p>
      )
    }
  }

  render() {
    return (
      <section className="Results">
        <div className="block-content">
          <ul className="restaurant-items">
            {this.renderRestaurants()}
          </ul>
        </div>
      </section>
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
