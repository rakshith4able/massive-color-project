import React, { Component } from 'react'
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import 'rc-slider/assets/index.css'

import './Palette.css';

class Palette extends Component {
    constructor(props) {
        super(props);
        this.state = {
            level: 500
        };
        this.changeLevel = this.changeLevel.bind(this);
    }

    changeLevel(level) {
        this.setState({ level: level });
    }

    render() {

        const colorBoxes = this.props.palette.colors[this.state.level].map(
            (color) => {
                return <ColorBox background={color.hex} name={color.name} />
            }
        );

        return (
            <div className="Palette">
                <Navbar level={this.state.level} changeLevel={this.changeLevel} />


                {/* header */}
                <div className="Palette-colors">
                    {/* Colors */}
                    {colorBoxes}
                </div>
                {/* footer */}
            </div>
        )
    }
}

export default Palette;
