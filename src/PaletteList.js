import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import seedColor from './seedColor'
export default class PaletteList extends Component {
    render() {
        return (
            <div className="PaletteList">
                <h1>React Colors</h1>
                {seedColor.map(
                    (palette) => {
                        return (<p><Link exact to={`/palette/${palette.id}`}>{palette.paletteName}</Link></p>)
                    }
                )}
            </div>
        )
    }
}
