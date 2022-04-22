import React from 'react';
import { ResolutionsAllowed } from "./config.js"

class ChartResolutionChooser extends React.Component {
  constructor(props) {
    super(props);
    var options = []
    for(var key in ResolutionsAllowed) {
      var value = ResolutionsAllowed[key];
      options.push(<option value={key} key={key}>{value}</option>)
    }
    this.state = {selectHtmls: options}
  }

  render() {
    return (
      <label>
        Pick the resolution:
        <select value={this.props.resolution} onChange={(i) => this.props.handleOnResolutionSelectionChange(i.target.value)}>
          {this.state.selectHtmls}
        </select>
      </label>
    );
  }
}

export default ChartResolutionChooser;