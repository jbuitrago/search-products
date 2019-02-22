import { REQUEST_ITEMS, RECEIVE_ITEMS} from '../action-type/search.js';
// Initial State
const initialState = {
  searchTerm: '',
  isFetchingData: true,
  searchResult: {}
}

// Reducers

export default function search(state = initialState, action) {
  switch (action.type) {
    case REQUEST_ITEMS:
      return { ...state, isFetchingData: true, searchTerm: action.searchTerm }
    case RECEIVE_ITEMS:
      return {
        ...state,
        isFetchingData: false,
        searchTerm: action.searchTerm,
        searchResult: action.searchResult
      }

    default:
      return state
  }
}
