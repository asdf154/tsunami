export const CoinsConfig = {
  "BITFINEX_SPOT_LUNA_USD": "Luna - BitFinex",
  "BITTREX_SPOT_LUNA_USDT": "Luna - Bittrex",
  "GEMINI_SPOT_LUNA_USD": "Luna - Gemini"
}

export const ResolutionsConfig = {
  "1MIN": "1 Minute",
  "5MIN": "5 Minutes",
  "15MIN": "15 Minutes",
  "1HRS": "1 Hour",
  "4HRS": "4 Hours",
  "12HRS": "12 Hours",
  "1DAY": "1 Day",
  "7DAY": "7 Days",
  "1MTH": "1 Month"
}

export const DefaultStartCoin = Object.keys(CoinsConfig)[0]
export const DefaultStartResolution = Object.keys(ResolutionsConfig)[3]

export const highchartOptions = (price, volume) => {
    return {
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
          data: price
      }, {
          type: 'column',
          id: 'luna-volume',
          name: 'Luna Volume',
          yAxis: 1,
          data: volume
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
  }