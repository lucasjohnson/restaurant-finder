import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchRestaurants } from '../actions/restaurantsActions'
import { Restaurant } from '../components/Restautant'
import { isMobile } from '../helpers/helpers'

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: '',
      isMobile: Boolean,
      formSubmitted: false
    }
  }

  setMobileState = () => {
    this.setState({
      isMobile: isMobile()
    });
  }

  componentDidMount() {
    window.addEventListener('resize', this.setMobileState);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.setMobileState);
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
      formSubmitted: true
    })
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
    const { isMobile, formSubmitted } = this.state

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
        <p className="loading">No restaurants found, please try again</p>
      )
    } else {
      return (
        restaurants.map(restaurant =>
          <Restaurant
            key={restaurant.id}
            restaurant={restaurant}
            isMobile={isMobile}
          />
        )
      )
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
  hasErrors: state.restaurants.hasErrors,
  loading: state.restaurants.loading,
  restaurants: state.restaurants.restaurants
})

export default connect(mapStateToProps)(Form)
