import './App.css';
import Palette from './Palette';
import seedColor from './seedColor';

function App() {
  return (
    <div className="App">
      <Palette {...seedColor[4]} />
    </div>
  );
}

export default App;
