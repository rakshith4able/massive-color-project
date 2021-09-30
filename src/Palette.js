import React, { Component } from 'react'
import ColorBox from './ColorBox';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css'
import './Palette.css';

class Palette extends Component {
    constructor(props) {
        super(props);
        this.state = {
            level: 500
        };
        this.changelevel = this.changelevel.bind(this);
    }

    changelevel(level) {
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
                <div className="slider">
                    <Slider
                        defaultValue={this.state.level}
                        min={100}
                        max={900}
                        step={100}
                        onAfterChange={this.changelevel}
                    />
                </div>

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
