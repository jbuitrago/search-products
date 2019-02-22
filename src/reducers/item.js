import { REQUEST_ITEM_DETAIL, RECEIVE_ITEM_DETAIL} from '../action-type/item.js';

// Initial State

const initialState = {
  itemRequested: '',
  isFetchingData: true,
  activeItem: {}
}

export default function item(state = initialState, action) {
  switch (action.type) {
    case REQUEST_ITEM_DETAIL:
      return {
        ...state,
        isFetchingData: true,
        itemRequested: action.itemRequested
      }
    case RECEIVE_ITEM_DETAIL:
      return {
        ...state,
        itemRequested: action.itemRequested,
        isFetchingData: false,
        activeItem: action.activeItem
      }

    default:
      return state
  }
}
