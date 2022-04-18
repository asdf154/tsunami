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
		  priceData: null,
		  zoomDomain: null,
		  brushDomain: null
	  };
    this.handleOnChange(defaultStartCoin)
  }
  
  handleBrush(domain) {
    console.log("app.handleBrush.type1", this.constructor.name)
    // this.setState({zoomDomain: domain});
  }
  
  handleZoom(domain) {
    console.log("app.handleZoom.type1", this.constructor.name)
    this.setState({brushDomain: domain});
  }
  
  successCallback(response, selectedCoin) {
    let newPriceData = response.data.prices.map(t => {
      return {x: new Date(t[0]), y: t[1]}
    })
    // let newZoomDomain = {x: [newPriceData[0].x, newPriceData[newPriceData.length-1].x], y: [newPriceData[0].y, newPriceData[newPriceData.length-1].y]}
    let newZoomDomain = null //null makes it zoom out to show the whole chart
    let newBrushDomain = null //null makes it zoom out to show the whole chart
    console.log("newZoomDomain",newZoomDomain)
    this.setState({selectedCoin: selectedCoin, priceData: newPriceData, zoomDomain: newZoomDomain, brushDomain: newBrushDomain});
  }
  
  async handleOnChange(selectedCoin) {
    let response = getCoinHistoricalPrice(selectedCoin)
    response.then((r) => this.successCallback(r, selectedCoin))
      .catch((err) => console.error(err));
  }
  
  render() {
    return (
      <div>
        <CoinChooser selectedCoin={this.state.selectedCoin} handleOnChange={(i) => this.handleOnChange(i)} />
        <Chart zoomDomain = {this.state.zoomDomain} priceData = {this.state.priceData} handleZoom = {(i) => this.handleZoom(i)} handleBrush = {(i) => this.handleBrush(i)} parentReact = {this} />
      </div>
    );
  }
}


ReactDOM.render(<App />, document.getElementById('root'));