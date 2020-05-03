import * as actions from '../actions/restaurantsActions'

export const initialState = {
  hasErrors: false,
  loading: false,
  restaurants: [],
  formSubmitted: false
}

export default function restaurantsReducer(state = initialState, action) {
  switch (action.type) {
    case actions.GET_RESTAURANTS:
      return { ...state, loading: true, formSubmitted: true }
    case actions.GET_RESTAURANTS_SUCCESS:
      return { restaurants: action.payload, loading: false, hasErrors: false, formSubmitted: true }
    case actions.GET_RESTAURANTS_FAILURE:
      return { ...state, loading: false, hasErrors: true, formSubmitted: true }
    default:
      return state
  }
}
