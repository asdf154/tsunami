import React from 'react';
import Chart from './chart';
import CoinChooser from './CoinChooser';
import { getCoinHistoricalPrice } from './getCoinHistoricalPrice.js';
import { DefaultStartCoin } from "./config.js"
import { createRoot } from 'react-dom/client';

class App extends React.Component {
  constructor(props) {
	  super(props);
    
    let defaultStartCoin = DefaultStartCoin
	  this.state = {
      selectedCoin: defaultStartCoin,
		  priceData: null,
		  volumeData: null
	  };
    this.handleOnCoinSelectionChange(defaultStartCoin)
  }
  
  successCallback(data, selectedCoin) {
    this.setState({selectedCoin: selectedCoin, priceData: data.priceData, volumeData: data.volumeData});
    console.log("index.state", this.state)
  }
  
  async handleOnCoinSelectionChange(selectedCoin) {
    getCoinHistoricalPrice(selectedCoin, new Date(), "1DAY")
      .then((r) => this.successCallback(r, selectedCoin))
      .catch((err) => console.error(err));
  }
  
  render() {
    return (
      <>
        <CoinChooser selectedCoin={this.state.selectedCoin} handleOnCoinSelectionChange={(i) => this.handleOnCoinSelectionChange(i)} />
        <Chart priceData = {this.state.priceData} volumeData = {this.state.volumeData} />
      </>
    );
  }
}


const root = createRoot(document.getElementById('root'));
root.render(<App />);
// ReactDOM.render(<App />, document.getElementById('root'));