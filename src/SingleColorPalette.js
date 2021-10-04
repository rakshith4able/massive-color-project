import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import ColorBox from './ColorBox';
import PaletteFooter from './PaletteFooter';
class SingleColorPalette extends Component {
    constructor(props) {
        super(props);
        this._shades = this.getShades(this.props.palette, this.props.colorId);
        this.state = { format: "hex" };
        this.changeFormat = this.changeFormat.bind(this);
    }

    getShades(palette, colorToFilter) {
        let shades = [];
        const allColors = palette.colors;
        for (let key in allColors) {
            shades = shades.concat(allColors[key]).filter(color => color.id === colorToFilter);
        }
        return shades.slice(1);
    }

    changeFormat(val) {
        this.setState({ format: val })
    }

    render() {

        const { format } = this.state;
        const colorBoxes = this._shades.map(color => (
            <ColorBox key={color.name} name={color.name} background={color[format]} showLink={false} />
        ));

        return (
            <div className="Palette SinglePalette">
                <Navbar handleChange={this.changeFormat} isSinglePalette={true} />
                <div className="Palette-colors">
                    {colorBoxes}
                    <div className="goBack ColorBox">
                        <Link className="goBack-btn" to={`/palette/${this.props.palette.id}`}>Go Back </Link>
                    </div>
                </div>
                <PaletteFooter paletteName={this.props.palette.id} emoji={this.props.palette.emoji} />
            </div>
        );
    }
}

export default SingleColorPalette;