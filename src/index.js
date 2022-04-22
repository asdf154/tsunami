import React from 'react';
import { createRoot } from 'react-dom/client';
import Chart from './chart';
import Chooser from './Chooser';
import { getCoinHistoricalPrice } from './getCoinHistoricalPrice.js';
import { DefaultStartCoin, DefaultStartResolution } from "./config.js"
import { ResolutionsConfig, CoinsConfig } from "./config.js"

class App extends React.Component {
  constructor(props) {
	  super(props);
    
	  this.state = {
      selectedCoin: DefaultStartCoin,
		  priceData: null,
		  volumeData: null,
		  resolution: DefaultStartResolution
	  };
    this.handleOnCoinSelectionChange(DefaultStartCoin)
  }
  
  successCallback(data, selectedCoin, resolution) {
    this.setState({selectedCoin: selectedCoin, priceData: data.priceData, volumeData: data.volumeData, resolution: resolution});
  }
  
  handleOnChange(selectedCoin, resolution) {
    getCoinHistoricalPrice(selectedCoin, new Date(), resolution)
      .then((r) => this.successCallback(r, selectedCoin, resolution))
      .catch((err) => console.error(err));
  }
  
  handleOnCoinSelectionChange(selectedCoin) {
    this.handleOnChange(selectedCoin, this.state.resolution)
  }
  
  handleOnResolutionSelectionChange(resolution) {
    this.handleOnChange(this.state.selectedCoin, resolution)
  }
  
  render() {
    return (
      <>
        <Chooser 
          labelText       = "Pick your coin:"
          selectedValue   = {this.state.selectedCoin}
          changeHandler   = {(i) => this.handleOnCoinSelectionChange(i)}
          choices         = {CoinsConfig}
        />
        <br />
        <Chooser 
          labelText       = "Pick your resolution:"
          selectedValue   = {this.state.resolution}
          changeHandler   = {(i) => this.handleOnResolutionSelectionChange(i)}
          choices         = {ResolutionsConfig}
        />
        <Chart priceData = {this.state.priceData} volumeData = {this.state.volumeData} />
      </>
    );
  }
}


const root = createRoot(document.getElementById('root'));
root.render(<App />);
