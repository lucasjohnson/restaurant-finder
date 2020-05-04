export const GET_RESTAURANTS = 'GET_RESTAURANTS'
export const GET_RESTAURANTS_SUCCESS = 'GET_RESTAURANTS_SUCCESS'
export const GET_RESTAURANTS_FAILURE = 'GET_RESTAURANTS_FAILURE'
export const REFINE_RESTAURANTS_RESULTS = 'REFINE_RESTAURANTS'

export const getRestaurants = () => ({
  type: GET_RESTAURANTS
})

export const getRestaurantsSuccess = restaurants => ({
  type: GET_RESTAURANTS_SUCCESS,
  payload: restaurants
})

export const getRestaurantsFailure = () => ({
  type: GET_RESTAURANTS_FAILURE
})

export const refineRestaurantsResults = restaurants => ({
  type: REFINE_RESTAURANTS_RESULTS,
  payload: restaurants
})

export function fetchRestaurants(searchTerm) {
  return async dispatch => {
    dispatch(getRestaurants())
    try {
      const response = await fetch(`https://opentable.herokuapp.com/api/restaurants?city=${searchTerm}`)
      const data = await response.json()
      dispatch(getRestaurantsSuccess(data.restaurants))
    } catch (error) {
      dispatch(getRestaurantsFailure())
    }
  }
}

export function refineRestaurants(restaurants, searchTerm) {
  searchTerm = searchTerm.toLowerCase()
  let results = []

  restaurants.forEach(restaurant => {
    const name = restaurant.name.toLowerCase()
    const area = restaurant.area.toLowerCase()
    const address = restaurant.address.toLowerCase()

    if (
      name.includes(searchTerm) ||
      area.includes(searchTerm) ||
      address.includes(searchTerm)
    ) {
      results.push(restaurant);
    }
  })

  return async dispatch => {
    dispatch(getRestaurants())
    try {
      dispatch(refineRestaurantsResults(results))
    } catch (error) {
      dispatch(getRestaurantsFailure())
    }
  }
}
