import React, { Component } from 'react';
import './ColorBox.css';

class ColorBox extends Component {
    render() {
        return (
            <div className="ColorBox" style={{ backgroundColor: this.props.background }}>
                <span>{this.props.name} </span>
                <span>more!</span>
            </div>
        )
    }
}

export default ColorBox;
