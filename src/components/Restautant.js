import React from 'react'

export const Restaurant = ({ restaurant }) => (
  <li className="restaurant-item">
    <img className="restaurant-image" src={restaurant.image_url} alt={restaurant.name} />
    <h2 className="restaurant-title">
      {restaurant.name}
      <span className="restaurant-price">{restaurant.price}</span>
    </h2>
    <p className="restaurant-address">{`${restaurant.address}, ${restaurant.postal_code}`}</p>
    <span className="restaurant-phone">{restaurant.phone}</span>
    <a
      href={restaurant.reserve_url}
      className="restaurant-link"
      title={`${restaurant.name} reservation page opens in new window`}
      target="_blank"
      rel="noopener noreferrer"
    >
      Book
    </a>
  </li>
)
