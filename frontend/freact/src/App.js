import logo from './logo.svg';
import './App.css';
import React,{useState,useEffect} from 'react'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <DataFetcher/>
      </header>
    </div>
  );
}




function DataFetcher() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8080/api/getAllPairs')  // Buraya API URL'sini yazın
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setData(data);
      })
      .catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
      });
  }, []);  // Boş bağımlılık dizisi, yalnızca bileşen ilk yüklendiğinde çağrılmasını sağlar

  if (!data) {
    return <div>Loading...</div>;
  }

var dizi=[1,2,3,4,5,6];

  return (
        <div>
          <h1>Fetched Data</h1>
      
          {data.length === 0 ? (
        <div>Loading...</div>
      ) : (
        <ul>
          {data.map(item => (
            <li key={item.id}>
              {item.symbol} - {item.price} 
            </li>
          ))}
        </ul>
      )}

      {/* <div>{JSON.stringify(data)}</div> */}
    </div>
  );
}

export default App;


