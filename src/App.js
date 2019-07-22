import React, { Component } from 'react';
import Konva from 'konva';
import { render } from 'react-dom';
import { Stage, Layer, Rect, Text, Circle, Line } from 'react-konva';
import './App.css';


class App extends Component {
    state = {
        screenCenter: [window.innerWidth/2,window.innerHeight/2],
        circleFill: 'white',
        circleStroke: '#49d3fc'
    }

    updateDimension = () => {
        this.setState({ screenCenter: [window.innerWidth/2,window.innerHeight/2] })
    }

    handleMouseEnter = e => {
        this.setState({
            circleFill: '#49d3fc',
            // circleStroke: 'white'
        });
    }

    handleMouseLeave = e => {
        this.setState({
            circleFill: 'white',
            // circleStroke: '#49d3fc'
        });
    }

    /**
     * Add event listener
     */
    componentDidMount() {
        window.addEventListener("resize", this.updateDimension);
    }

    /**
     * Remove event listener
     */
    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimension);
    }

    render() {
        return (
            <Stage width={window.innerWidth} height={window.innerHeight}>
                <Layer>
                    <Circle
                        x={this.state.screenCenter[0]}
                        y={this.state.screenCenter[1]}
                        radius={100}
                        stroke={this.state.circleStroke}
                        fill={this.state.circleFill}
                        strokeWidth={4}
                        onMouseEnter={this.handleMouseEnter}
                        onMouseLeave={this.handleMouseLeave}
                    />
                </Layer>
            </Stage>
        );
    }
}


export default App;