import React from 'react';
import { VictoryChart, VictoryZoomContainer, VictoryLine, VictoryBrushContainer, VictoryAxis } from 'victory';
import { AdvancedChart } from "react-tradingview-embed";
import Highcharts from 'highcharts/highstock'
import HighchartsReact from 'highcharts-react-official'


class Chart extends React.Component {
  render() {
    
    var groupingUnits = [[
            'week',                         // unit name
            [1]                             // allowed multiples
        ], [
            'month',
            [1, 2, 3, 4, 6]
        ]]
    
      var options = {
        "yAxis": [{
          "height": '60%',
          "gridLineDashStyle": "Dash",
          "gridLineColor": "#46627f",
          "lineColor": "#BDC3C7",
          "minorGridLineColor": "#BDC3C7",
          "tickColor": "#46627f",
          "tickWidth": 1,
          "title": {
            "style": {
              "color": "#FFFFFF"
            }
          },
          "resize": {
              "enabled": true
          }
        },
        {
          "top": '65%',
          "height": '35%',
          "gridLineDashStyle": "Dash",
          "gridLineColor": "#46627f",
          "lineColor": "#BDC3C7",
          "minorGridLineColor": "#BDC3C7",
          "tickColor": "#46627f",
          "tickWidth": 1,
          "title": {
            "style": {
              "color": "#FFFFFF"
            }
          }
        }],
        "series": [{
            type: 'candlestick',
            id: 'luna-ohlc',
            name: 'Luna Stock Price',
            data: this.props.priceData,
            dataGrouping: {
                units: groupingUnits
            }
        }, {
            type: 'column',
            id: 'luna-volume',
            name: 'Luna Volume',
            yAxis: 1,
            data: this.props.volumeData,
            dataGrouping: {
                units: groupingUnits
            }
        }],
        "colors": ["#f1c40f", "#2ecc71", "#9b59b6", "#e74c3c", "#34495e", "#3498db", "#1abc9c", "#f39c12", "#d35400"],
        "chart": {
          "backgroundColor": "#0B486B",
          "style": {
            "color": "white",
            "fontFamily": "Oswald",
            "fontWeight": "normal"
          }
        },
        "xAxis": {
          "gridLineDashStyle": "Dash",
          "gridLineWidth": 1,
          "gridLineColor": "#46627f",
          "lineColor": "#46627f",
          "minorGridLineColor": "#BDC3C7",
          "tickColor": "#46627f",
          "tickWidth": 1,
          "title": {
            "style": {
              "color": "#FFFFFF"
            }
          }
        },
        "legendBackgroundColor": "rgba(0, 0, 0, 0.5)",
        "background2": "#505053",
        "dataLabelsColor": "#B0B0B3",
        "textColor": "#34495e",
        "contrastTextColor": "#F0F0F3",
        "maskColor": "rgba(255,255,255,0.3)",
        "title": {
          "style": {
            "fontSize": "2em",
            "fontFamily": "Bangers",
            "color": "#FFFFFF"
          }
        },
        "subtitle": {
          "style": {
            "color": "#FFFFFF"
          }
        },
        "legend": {
          "itemStyle": {
            "color": "white",
            "fontWeight": "normal"
          },
          "itemHoverStyle": {
            "color": "#C0C0C0"
          },
          "itemHiddenStyle": {
            "color": "#444444"
          }
        },
        tooltip: {
            split: true
        }
      }
    
    console.log("chart.render.props.priceData", this.props.priceData)
    console.log("chart.render.props.volumeData", this.props.volumeData)
    console.log("chart.render.options", options)
    
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