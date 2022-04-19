import React from 'react';
import ReactDOM from 'react-dom';
import Chart from './chart';
import CoinChooser from './CoinChooser';
import { getCoinHistoricalPrice } from './getCoinHistoricalPrice.js';
import { DefaultStartCoin } from "./config.js"

class App extends React.Component {
  constructor(props) {
	  super(props);
    
    let defaultStartCoin = DefaultStartCoin
	  this.state = {
      selectedCoin: defaultStartCoin,
		  priceData: null
	  };
    this.handleOnCoinSelectionChange(defaultStartCoin)
  }
  
  successCallback(response, selectedCoin) {
    let newPriceData = response.data.prices.map(t => {
      return {x: new Date(t[0]), y: t[1]}
    })
    this.setState({selectedCoin: selectedCoin, priceData: newPriceData});
  }
  
  async handleOnCoinSelectionChange(selectedCoin) {
    getCoinHistoricalPrice(selectedCoin)
      .then((r) => this.successCallback(r, selectedCoin))
      .catch((err) => console.error(err));
  }
  
  render() {
    return (
      <div>
        <CoinChooser selectedCoin={this.state.selectedCoin} handleOnCoinSelectionChange={(i) => this.handleOnCoinSelectionChange(i)} />
        <Chart priceData = {this.state.priceData} />
      </div>
    );
  }
}


ReactDOM.render(<App />, document.getElementById('root'));