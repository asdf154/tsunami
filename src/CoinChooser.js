import React from 'react';
import { CoinsConfig } from "./config.js"

class CoinChooser extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var options = []
    for(var key in CoinsConfig.coins) {
      var value = CoinsConfig.coins[key];
      options.push(<option value={key}>{value}</option>)
    }
    
    return (
      <label>
        Pick your coin:
        <select value={this.props.selectedCoin} onChange={(i) => this.props.handleOnChange(i.target.value)}>
          {options}
        </select>
      </label>
    );
  }
}

export default CoinChooser;