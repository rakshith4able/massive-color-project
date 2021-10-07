import React, { Component } from 'react'
import { withStyles } from '@mui/styles'
import MiniPalette from './MiniPalette'
import styles from './Styles/PaletteListStyles'
import { Link } from 'react-router-dom'

class PaletteList extends Component {
    constructor(props) {
        super(props);
        this.goToPalette = this.goToPalette.bind(this);
    }

    goToPalette(id) {
        this.props.history.push(`/palette/${id}`);
    }
    render() {
        const { palettes, classes } = this.props;
        return (
            <div className={classes.root}>
                <div className={classes.container}>
                    <nav className={classes.nav}>
                        <h1>React Colors</h1>
                        <Link to="/palette/new">New Palette</Link>
                    </nav>

                    <div className={classes.palettes}>
                        {palettes.map(
                            (palette) => {
                                return (<MiniPalette {...palette} handleClick={() => { return this.goToPalette(palette.id) }} />)
                            }
                        )}
                    </div>
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(PaletteList);
