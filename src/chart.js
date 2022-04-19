import React from 'react';
import { VictoryChart, VictoryZoomContainer, VictoryLine, VictoryBrushContainer, VictoryAxis } from 'victory';

let width = 800
let zoomHeight = 500
let brushHeight = 200

class Chart extends React.Component {
  constructor(props){
    super(props)
    
    this.state = {
      zoomDomain: null,
      brushDomain: null
    }
  }
  
  handleBrush(i) {
    this.setState({zoomDomain: i})
  }
  
  handleZoom(i) {
    this.setState({brushDomain: i})
  }
    
  render() {
    
    return (
      <div>
          <VictoryChart
            width={width}
            height={zoomHeight}
            scale={{x: "time"}}
            containerComponent={
              <VictoryZoomContainer
                responsive={false}
                zoomDimension="x"
                zoomDomain={this.state.zoomDomain}
                onZoomDomainChange={this.handleZoom.bind(this)}
              />
            }
          >
            <VictoryAxis
              style={{ tickLabels: {fill: "white"}}}
            />
            <VictoryAxis dependentAxis
              style={{ tickLabels: {fill: "white"}}}
            />
            <VictoryLine
              style={{
                data: {stroke: "tomato"}
              }}
              data={this.props.priceData}
            />

          </VictoryChart>

          <VictoryChart
            width={width}
            height={brushHeight}
            scale={{x: "time"}}
            padding={{top: 30, left: 50, right: 50, bottom: 30}}
            containerComponent={
              <VictoryBrushContainer
                responsive={false}
                brushDimension="x"
                brushDomain={this.state.brushDomain}
                onBrushDomainChange={this.handleBrush.bind(this)}
              />
            }
          >
            <VictoryAxis
              // tickFormat={(x) => new Date(x).getFullYear()}
              style={{ tickLabels: {fill: "white"}}}
            />
            <VictoryAxis dependentAxis
              style={{ tickLabels: {fill: "white"}}}
            />
            <VictoryLine
              style={{
                data: {stroke: "tomato"}
              }}
              data={this.props.priceData}
            />
          </VictoryChart>
      </div>
    );
  }
}

export default Chart;