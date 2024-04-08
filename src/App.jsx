import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Nav from './Nav';
import RoutesList from './RoutesList';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Nav dogs={{}} />
        <RoutesList />
      </BrowserRouter>
    </div>
  );
}

export default App;
