import React from 'react';

class Chooser extends React.Component {
  constructor(props) {
    super(props);
    var options = []
    for(var key in this.props.choices) {
      var value = this.props.choices[key];
      options.push(<option value={key} key={key}>{value}</option>)
    }
    this.state = {selectHtmls: options}
  }

  render() {
    return (
      <label>
      {this.props.labelText}
        <select value={this.props.selectedValue} onChange={(i) => this.props.changeHandler(i.target.value)}>
          {this.state.selectHtmls}
        </select>
      </label>
    );
  }
}
export default Chooser;