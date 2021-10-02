import React, { Component } from 'react'
import Palette from './Palette';
import seedColor from './seedColor';
import PaletteList from './PaletteList';
import { Route, Switch } from 'react-router-dom';
import { generatePalette } from './ColorHelpers';
import SingleColorPalette from './SingleColorPalette';


class App extends Component {

  findPalette(id) {
    return seedColor.find((palette) => {
      return palette.id === id;
    })
  }

  render() {
    return (
      <Switch>
        <Route exact path="/" render={(props) => (<PaletteList palettes={seedColor} {...props} />)} />
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
