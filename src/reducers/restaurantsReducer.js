import * as actions from '../actions/restaurantsActions'

export const initialState = {
  hasErrors: false,
  loading: false,
  restaurants: [],
  searchSubmitted: false
}

export default function restaurantsReducer(state = initialState, action) {
  switch (action.type) {
    case actions.GET_RESTAURANTS:
      return { ...state, loading: true }
    case actions.GET_RESTAURANTS_SUCCESS:
      return { ...state, restaurants: action.payload, loading: false, searchSubmitted: true }
    case actions.GET_RESTAURANTS_FAILURE:
      return { ...state, loading: false, hasErrors: true, searchSubmitted: true }
    case actions.REFINE_RESTAURANTS_RESULTS:
      return { restaurants: action.payload, loading: false, hasErrors: false, searchSubmitted: true}
    default:
      return state
  }
}
