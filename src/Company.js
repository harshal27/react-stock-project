import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import {connect} from 'react-redux';
import {fetch_company_data} from './actions/actions.js'

var Loader = require('react-loader');

class Company extends React.Component{
  constructor(props) {
    super(props);
  }

  componentWillMount(){
    this.props.dispatch(fetch_company_data(this.props.match.params.id))
  }

  render(){
    let company = this.props.company_reducer.company[this.props.match.params.id] || {};

    return(
      <div>
        <Loader loaded={!this.props.company_reducer.loader} top="30%" left="30%">
          <h1>{company.companyName} ({company.sector})</h1>

          <div style={{paddingTop:'20'}}>
            <span style={{width:250, display:'inline-block', color:'blue'}}>
              P/E ratio
            </span>
            <span style={{width:250, display:'inline-block', textAlign:'right', color:'black'}}>
              {company.peRatio}
            </span>
          </div>

          <div>
            <span style={{width:250, display:'inline-block',color:'blue'}}>
              52 Week High
            </span>
            <span style={{width:250, display:'inline-block', textAlign:'right', color:'black'}}>
              {company.week52High}
            </span>
          </div>

          <div>
            <span style={{width:250, display:'inline-block',color:'blue'}}>
              52 Week Low
            </span>
            <span style={{width:250, display:'inline-block', textAlign:'right', color:'black'}}>
              {company.week52Low}
            </span>
          </div>

          <div>
            <span style={{width:250, display:'inline-block',color:'blue'}}>
              Market Cap
            </span>
            <span style={{width:250, display:'inline-block', textAlign:'right', color:'black'}}>
              {company.marketCap}
            </span>
          </div>
        </Loader>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    company_reducer: state.company_reducer
  }
}

export default connect(mapStateToProps)(Company);
