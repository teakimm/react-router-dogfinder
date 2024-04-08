import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Nav from './Nav';
import RoutesList from './RoutesList';
import { useState } from 'react';

function App() {
  const [dogsFetched, setDogsFetched] = useState(false);
  const [dogData, setDogData] = useState([]);

  async function getDogs() {
    const response = await fetch("http://localhost:5001/dogs");
    const data = await response.json();
    setDogsFetched(true);
    setDogData(data);
  }

  if (!dogsFetched) getDogs();

  return (
    <div>
      {dogsFetched
        ? <div className="App">
          <BrowserRouter>
            <Nav dogs={dogData} />
            <RoutesList dogs={dogData} />
          </BrowserRouter>
        </div>
        : <h1>Loading...</h1>
      }
    </div>
  );
}

export default App;
