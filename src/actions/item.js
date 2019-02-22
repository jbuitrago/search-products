import axios from 'axios'
import { push } from 'react-router-redux'

import { REQUEST_ITEM_DETAIL, RECEIVE_ITEM_DETAIL} from '../action-type/item.js';
// Action Creators

export function requestItemDetail(itemRequested) {
  return { type: REQUEST_ITEM_DETAIL, itemRequested }
}

export function receiveItemDetail(itemRequested, activeItem) {
  return { type: RECEIVE_ITEM_DETAIL, itemRequested, activeItem }
}


// Async Action Creators

export function fetchItemDetail(itemRequested) {
  return async dispatch => {
    dispatch(requestItemDetail(itemRequested))

    try {
      const { data } = await axios.get(`/api/items/${itemRequested}`)
      dispatch(push(`/item/${itemRequested}`))
      dispatch(receiveItemDetail(itemRequested, data))
    } catch (e) {
      console.log(e)
    }
  }
}
