import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchRestaurants } from '../actions/restaurantsActions'
import { Restaurant } from '../components/Restautant'

const LandingPage = ({ dispatch, hasErrors, loading, restaurants }) => {
  useEffect(() => {
    dispatch(fetchRestaurants())
  }, [dispatch])

  const renderRestaurants = () => {
    if (loading) {
      return <p className="loading">Loading restaurants...</p>
    } else if (hasErrors) {
      return <p className="loading">No restaurants found, please try again</p>
    } else {
      return restaurants.map(restaurant => <Restaurant key={restaurant.id} restaurant={restaurant} />)
    }
  }

  return (
    <section className="LandingPage">
      <h1 className="title">Food App</h1>
      {renderRestaurants()}
    </section>
  )
}

const mapStateToProps = state => ({
  loading: state.restaurants.loading,
  restaurants: state.restaurants.restaurants,
  hasErrors: state.restaurants.hasErrors
})

export default connect(mapStateToProps)(LandingPage)
