import React, { Component } from 'react'
import { isMobile } from '../helpers/helpers'

export default class Restaurant extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isMobile: Boolean,
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

  render() {
    const { restaurant } = this.props
    const { isMobile } = this.state

    return (
      <li className="restaurant-item">
        <img className="restaurant-image" src={restaurant.image_url} alt={restaurant.name} />
        <h2 className="restaurant-title">
          {restaurant.name}
          <span className="restaurant-price">{restaurant.price}</span>
        </h2>
        <p className="restaurant-address">{`${restaurant.address}, ${restaurant.postal_code}`}</p>
        <span className="restaurant-phone">{restaurant.phone}</span>
        <a
          href={isMobile ? restaurant.mobile_reserve_url : restaurant.reserve_url}
          className="restaurant-link"
          title={`${restaurant.name} reservation page opens in new window`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Book
        </a>
      </li>
    )
  }
}
