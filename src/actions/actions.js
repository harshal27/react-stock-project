import axios from 'axios'

export const REQUEST_DATA = 'REQUEST_DATA'
function request_data(data){
  return {
    type: REQUEST_DATA,
    payload: data
  }
}

export const RECEIVED_DATA = 'RECEIVED_DATA'
function received_data(data){
  return {
    type: RECEIVED_DATA,
    payload: data
  }
}

export const REQUEST_COMPANY_DATA = 'REQUEST_COMPANY_DATA'
function request_company_data(data){
  return {
    type: REQUEST_COMPANY_DATA,
    payload: data
  }
}

export const RECEIVED_COMPANY_DATA = 'RECEIVED_COMPANY_DATA'
function received_company_data(data){
  return {
    type: RECEIVED_COMPANY_DATA,
    payload: data
  }
}

export function fetch_gainers_data(){
  return function(dispatch, getState){
    if (!getState().stock_list_reducer.topGainers.length) {
      dispatch({type: REQUEST_DATA, payload: {gainerLoader: true} })
      axios.get('https://api.iextrading.com/1.0/stock/market/list/gainers')
        .then((response) => {
          dispatch({type: RECEIVED_DATA, payload: {topGainers:response.data, gainerLoader: false}})
        });
    }
  }
}

export function fetch_loosers_data(){
  return function(dispatch, getState){
    if (!getState().stock_list_reducer.topLoosers.length) {
      dispatch({type: REQUEST_DATA, payload: {looserLoader: true}})
      axios.get('https://api.iextrading.com/1.0/stock/market/list/losers')
        .then((response) => {
          dispatch({type: RECEIVED_DATA, payload: {topLoosers:response.data, looserLoader: false}})
        });
    }
  }
}

export function fetch_company_data(symbol){
  return function(dispatch, getState){
    if (!getState().company_reducer.company[symbol]) {
      dispatch({type: REQUEST_COMPANY_DATA, payload: {loader: true}})
      axios.get(`https://api.iextrading.com/1.0/stock/${symbol}/quote`)
        .then((response) => {
          dispatch({type: RECEIVED_COMPANY_DATA, payload: {company:{[response.data.symbol]: response.data}, loader: false}})
        });
    }
  }
}
