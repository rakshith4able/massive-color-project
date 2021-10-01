import Palette from './Palette';
import seedColor from './seedColor';
import { Route, Switch } from 'react-router-dom';
import { generatePalette } from './ColorHelpers';


function App() {
  return (

    <Switch>
      <Route exact path="/" render={() => (<h1>Palettes goes here</h1>)} />
      <Route exact path="/palette/:id" render={() => (<h1>Individual palettes goes here</h1>)} />
    </Switch>

    // <div className="App">
    //   <Palette palette={generatePalette(seedColor[4])} />
    // </div>
  );
}

export default App;
