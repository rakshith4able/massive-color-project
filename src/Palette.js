import React, { Component } from 'react'
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import PaletteFooter from './PaletteFooter';
import 'rc-slider/assets/index.css'

import './Palette.css';

class Palette extends Component {
    constructor(props) {
        super(props);
        this.state = {
            level: 500,
            format: "hex"
        };
        this.changeLevel = this.changeLevel.bind(this);
        this.changeFormat = this.changeFormat.bind(this);
    }

    changeFormat(val) {
        this.setState({ format: val })
    }

    changeLevel(level) {
        this.setState({ level: level });
    }

    render() {
        const { paletteName, emoji } = this.props.palette;
        const colorBoxes = this.props.palette.colors[this.state.level].map(
            (color) => {
                return <ColorBox
                    background={color[`${this.state.format}`]}
                    name={color.name}
                    key={color.id}
                    showLink={true}
                    moreLink={`/palette/${this.props.palette.id}/${color.id}`}
                />
            }
        );

        return (
            <div className="Palette">
                <Navbar level={this.state.level} changeLevel={this.changeLevel} handleChange={this.changeFormat} isSinglePalette={false} />
                <div className="Palette-colors">
                    {colorBoxes}
                </div>
                <PaletteFooter paletteName={paletteName} emoji={emoji} />
            </div>
        )
    }
}

export default Palette;
