import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
var Loader = require('react-loader');

class RenderStockList extends React.Component {
  constructor(props){
    super(props);
  }

  render(){

    let stockComponents = this.props.stocks.map((stock) => {
      return (
        <div key={stock.symbol}>
          <Link to={`/company/${stock.symbol}`} className="stockLink">
            <div className="stockList">
              <span className="company" style={{width:250, display:'inline-block'}}>
                {stock.companyName}
              </span>
              <span style={{width:250, display:'inline-block', textAlign:'center'}}>
                <span style={{color:stock.changePercent>=0?'green':'red'}}>{stock.changePercent} ({stock.change})</span>
              </span>
              <span style={{width:250, display:'inline-block', textAlign:'center', color:'black'}}>
                {stock.latestPrice}
              </span>
            </div>
          </Link>
        </div>
      );
    });
    return(
      <div>
        <Loader loaded={!this.props.loaded} top="30%" left="30%">
          <div>
            {stockComponents}
          </div>
        </Loader>
      </div>
    );
  }
}

export default RenderStockList;
