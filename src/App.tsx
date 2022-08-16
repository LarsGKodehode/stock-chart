/**
 * Wrapper and setup for 
 */

// React
import {
  useEffect,
  useState
} from 'react';

// CSS
import './App.css';

// Components
import SearchBar from './assets/components/SearchBar/SearchBar'
import StockChart from './assets/components/StockChart/StockChart';

// secret format
interface SecretsFormat {
  USER: string,
  API_KEYS: {
    KEY: string,
    SANDBOXED_KEY: string,
  },
  WEBHOOK: {
    TOKEN: string,
    RESPONSE: {
      'X-Finnhub-Secret': string,
    },
    ACKNOWLEDGE: {
      STATUS_CODE: number
    }
  }
};

// Get localy stored API Key
// if not present, querry user for one
const getAPIKey: any = async () => {
  try {
    fetch('./.env/secrets.json')
      .then(response => response.json())
      .then(data => {
        return data.API_KEYS.SANDBOXED_KEY;
      });

  } catch (error) {
    const message = `Enter your API Key here:`;
    const input = prompt(message);


    if(input) {return input};

  };

  // Finally return empty
  return "";
};


// APP
function App() {
  // State managment
  const [ENV, setENV] = useState({
    API_KEY: "",
    API_ENDPOINT: "https://finnhub.io/api/v1",
    REQUEST_HEADER: {"X-Finnhub-Token": "sandbox_cbtkv72ad3i65oqcith0"},
  });

  // Get API keys
  useEffect(() => {
    // Look for local keys 
    fetch('./.env/secrets.json')
      .then((response) => response.json())
      .then((data) => {

        setENV((oldData) => {
          return {
            ...oldData,
            API_KEY: data.API_KEYS.SANDBOXED_KEY,
          };
        });

      })
      // If no local secrets found querry user
      .catch((error) => {
        console.error(error);
        const input = window.prompt(`Enter your API key here:`);

        if(input) {
          setENV((oldData) => {
            return {
              ...oldData,
              API_KEY: input,
            };
          });
        };

      });
  }, []);

  // ===== DEV ======
  // simple function caller
  function doStuff() {
    console.log(ENV);
  };
  // ===== DEV ======


  // Props definitions
  const searchProps = {
    API_KEY: ENV.API_KEY,
    API_ENDPOINT: ENV.API_ENDPOINT,
    REQUEST_HEADER: ENV.REQUEST_HEADER,
  };

  return (
    <div className="App">

      <SearchBar {...searchProps} />

      <StockChart />

      <div className='DEV_STUFF'>
        <h1>{ENV.API_KEY ? ENV.API_KEY : `No API key found`}</h1>
        <button onClick={() => doStuff()}>DEV BUTTON</button>
      </div>

    </div>
  );
};

export default App;