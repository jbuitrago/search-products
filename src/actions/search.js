import axios from 'axios'
import { push } from 'react-router-redux'
import { REQUEST_ITEMS, RECEIVE_ITEMS} from '../action-type/search.js';

// Action Creators

export function requestItems(searchTerm) {
  return { type: REQUEST_ITEMS, searchTerm }
}

export function receiveItems(searchTerm, searchResult) {
  return {
    type: RECEIVE_ITEMS,
    searchTerm,
    searchResult
  }
}

export function fetchItems(searchTerm) {
  return async dispatch => {
    dispatch(requestItems(searchTerm))

    try {
      dispatch(push(`/items?search=${searchTerm}`))
      const { data } = await axios.get(`/api/items?q=${searchTerm}`)
      dispatch(receiveItems(searchTerm, data))
    } catch (e) {
      console.log(e)
    }
  }
}

