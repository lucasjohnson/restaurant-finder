export const GET_RESTAURANTS = 'GET_RESTAURANTS'
export const GET_RESTAURANTS_SUCCESS = 'GET_RESTAURANTS_SUCCESS'
export const GET_RESTAURANTS_FAILURE = 'GET_RESTAURANTS_FAILURE'

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

export function fetchRestaurants() {
  return async dispatch => {
    dispatch(getRestaurants())

    try {
      const response = await fetch(`http://opentable.herokuapp.com/api/restaurants?city=toronto`)
      const data = await response.json()

      dispatch(getRestaurantsSuccess(data.restaurants))
    } catch (error) {
      dispatch(getRestaurantsFailure())
    }
  }
}
