import * as actions from '../actions/restaurantsActions'

export const initialState = {
  hasErrors: false,
  loading: false,
  restaurants: []
}

export default function restaurantsReducer(state = initialState, action) {
  switch (action.type) {
    case actions.GET_RESTAURANTS:
      return { ...state, loading: true }
    case actions.GET_RESTAURANTS_SUCCESS:
      return { restaurants: action.payload, loading: false, hasErrors: false }
    case actions.GET_RESTAURANTS_FAILURE:
      return { ...state, loading: false, hasErrors: true }
    default:
      return state
  }
}
