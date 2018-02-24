import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import RenderStockList from './RenderStockList'
import { connect } from 'react-redux'
import { fetch_gainers_data, fetch_loosers_data } from './actions/actions.js'


class StockList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.dispatch(fetch_gainers_data());
    this.props.dispatch(fetch_loosers_data());
  }

  render() {
    return(
      <div>
        <div>
          <h1>TOP GAINERS</h1>
          <div>
            <div style={{width:250, display:'inline-block', textAlign:'center'}}>
              Company name
            </div>
            <span style={{width:250, display:'inline-block', textAlign:'center'}}>
              Change
            </span>
            <span style={{width:250, display:'inline-block', textAlign:'center'}}>
              Last Price
            </span>
          </div>
          <div>
            <RenderStockList stocks={this.props.stock_list_reducer.topGainers} loaded={this.props.stock_list_reducer.gainerLoader}/>
          </div>
        </div>

        <div>
          <h1>TOP LOOSERS</h1>
          <div>
            <div style={{width:250, display:'inline-block', textAlign:'center'}}>
              Company name
            </div>
            <span style={{width:250, display:'inline-block', textAlign:'center'}}>
              Change
            </span>
            <span style={{width:250, display:'inline-block', textAlign:'center'}}>
              Last Price
            </span>
          </div>
          <div>
            <RenderStockList stocks={this.props.stock_list_reducer.topLoosers} loaded={this.props.stock_list_reducer.looserLoader}/>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    stock_list_reducer: state.stock_list_reducer
  }
}

export default connect(mapStateToProps)(StockList);
