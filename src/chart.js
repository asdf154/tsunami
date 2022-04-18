import React from 'react';
import { VictoryChart, VictoryZoomContainer, VictoryLine, VictoryBrushContainer, VictoryAxis, createContainer } from 'victory';

class Chart extends React.Component {
  constructor(props){
    super(props)
    
    this.state = {
      zoomDomain: props.zoomDomain,
      brushDomain: props.brushDomain
    }
  }
  
  handleBrush(i) {
    console.log("chart.handleBrush")
    this.setState({zoomDomain: i})
    this.props.parentReact.setState({zoomDomain: i})
    this.props.handleBrush(i)
    // this.props.handleBrush.bind(this.props.parentReact, i)
  }
  
  handleZoom(i) {
    console.log("chart.handleZoom")
    this.setState({brushDomain: i})
    this.props.parentReact.setState({brushDomain: i})
    this.props.handleZoom(i)
    // this.props.handleZoom.bind(this.props.parentReact, i)
  }
    
  render() {

    // const VictoryZoomVoronoiContainer = createContainer("zoom", "voronoi");
    
    return (
      <div>
          <VictoryChart
            width={400}
            height={300}
            scale={{x: "time"}}
            containerComponent={
              <VictoryZoomContainer
                zoomDimension="x"
                zoomDomain={this.props.zoomDomain}
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
            width={400}
            height={100}
            scale={{x: "time"}}
            padding={{top: 30, left: 50, right: 50, bottom: 30}}
            containerComponent={
              <VictoryBrushContainer
                brushDimension="x"
                brushDomain={this.props.brushDomain}
                onBrushDomainChange={this.handleBrush.bind(this)}
              />
            }
          >
            <VictoryAxis
              tickFormat={(x) => new Date(x).getFullYear()}
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