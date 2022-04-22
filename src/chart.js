import React from 'react';
import { highchartOptions } from "./config.js";
import Highcharts from 'highcharts/highstock'
import HighchartsReact from 'highcharts-react-official'


class Chart extends React.Component {
  render() {
    
    var options = highchartOptions(this.props.priceData, this.props.volumeData)
    
    return (
      <>
          <HighchartsReact
            highcharts={Highcharts}
            constructorType={'stockChart'}
            options={options}
          />
      </>
    );
  }
}

export default Chart;