import { REQUEST_DATA, RECEIVED_DATA, FETCH_DATA } from './../actions/actions.js'

const initialState = {
  topGainers: [],
  gainerLoader: false,
  topLoosers: [],
  looserLoader: false,
}
export function stock_list_reducer(state = initialState, action){
  switch (action.type) {

    case REQUEST_DATA: {
      return Object.assign({}, state, action.payload)
      break;
    }

    case RECEIVED_DATA: {
      return Object.assign({}, state, action.payload)
      break;
    }

    default:
      return state;
  }
}
