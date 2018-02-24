import { REQUEST_COMPANY_DATA, RECEIVED_COMPANY_DATA } from './../actions/actions.js'

const initialState = {
  company: {},
  loader: false
}

export function company_reducer(state = initialState, action){
  switch (action.type) {

    case REQUEST_COMPANY_DATA: {
      return Object.assign({}, state, action.payload)
      break;
    }

    case RECEIVED_COMPANY_DATA: {
      let company_data = Object.assign({}, state.company, action.payload.company)
      return Object.assign({}, state, {company: company_data, loader: action.payload.loader})
      break;
    }

    default:
      return state;
  }
}
