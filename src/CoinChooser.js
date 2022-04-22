import React from 'react';
import { CoinsConfig } from "./config.js"

class CoinChooser extends React.Component {
  constructor(props) {
    super(props);
    var options = []
    for(var key in CoinsConfig.coins) {
      var value = CoinsConfig.coins[key];
      options.push(<option value={key} key={key}>{value}</option>)
    }
    this.state = {coinSelectHtmls: options}
  }

  render() {
    return (
      <label>
        Pick your coin:
        <select value={this.props.selectedCoin} onChange={(i) => this.props.handleOnCoinSelectionChange(i.target.value)}>
          {this.state.coinSelectHtmls}
        </select>
      </label>
    );
  }
}

export default CoinChooser;