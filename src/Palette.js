import React, { Component } from 'react'
import ColorBox from './ColorBox';
import './Palette.css';

class Palette extends Component {
    render() {

        const colorBoxes = this.props.colors.map(
            (color) => {
                return <ColorBox background={color.color} name={color.name} />
            }
        );

        return (
            <div className="Palette">
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
