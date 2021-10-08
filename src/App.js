import React, { Component } from 'react'
import Palette from './Palette';
import seedColor from './seedColor';
import PaletteList from './PaletteList';
import { Route, Switch } from 'react-router-dom';
import { generatePalette } from './ColorHelpers';
import SingleColorPalette from './SingleColorPalette';
import NewPaletteForm from './NewPaletteForm';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      palettes: seedColor,
    };
    this.savePalette = this.savePalette.bind(this);
  }

  findPalette(id) {
    return this.state.palettes.find((palette) => {
      return palette.id === id;
    })
  }

  savePalette(newPalette) {
    console.log(newPalette);
    this.setState({ palettes: [...this.state.palettes, newPalette] });
  }

  render() {
    return (
      <Switch>
        <Route exact path="/" render={(props) => (<PaletteList palettes={this.state.palettes} {...props} />)} />

        <Route
          exact
          path='/palette/new'
          render={routeProps => (
            <NewPaletteForm
              savePalette={this.savePalette}
              palettes={this.state.palettes}
              {...routeProps}
            />
          )}
        />

        <Route exact path="/palette/:id" render={
          (args) => (
            <Palette palette={generatePalette(this.findPalette(args.match.params.id))}
            />)}
        />
        <Route exact
          path="/palette/:paletteId/:colorId"
          render={(params) => <SingleColorPalette
            palette={generatePalette(this.findPalette(params.match.params.paletteId))}
            colorId={params.match.params.colorId} />}
        />
      </Switch >

      // <div className="App">
      //   <Palette palette={generatePalette(seedColor[4])} />
      // </div>
    );
  }
}

export default App;
