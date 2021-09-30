import './App.css';
import { generatePalette } from './ColorHelpers';
import Palette from './Palette';
import seedColor from './seedColor';

function App() {
  return (
    <div className="App">
      <Palette palette={generatePalette(seedColor[4])} />
    </div>
  );
}

export default App;
