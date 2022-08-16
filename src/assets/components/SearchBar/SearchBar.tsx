// Libraries
import {
  BaseSyntheticEvent,
  useEffect,
  useState
} from "react";

// Types
interface SearchProps {
  API_KEY: string,
  API_ENDPOINT: string,
  REQUEST_HEADER: Headers;
};

// Component
function SearchBar(props: SearchProps): JSX.Element {
  // Get props
  const { API_KEY, API_ENDPOINT, REQUEST_HEADER } = props;

  // State managment
  const [data, setData] = useState({
    textInput: "",
    searchRespons: null,
  });


  // Effect handlers
  useEffect(() => {
    if(!data.textInput) {return};
    const query = "q=" + data.textInput;
    const requestString = API_ENDPOINT + "/search/" + query;

    fetch(requestString, {headers: REQUEST_HEADER})
      .then((response) => response.json())
      .then((data) => console.log(data));

  }, [data.textInput]);


  // Functions
  function handleChange(event: BaseSyntheticEvent) {
    const { value } = event.target;
    setData((oldData) => {
      return {
        ...oldData,
        textInput: value,
      };
    });
  };

  return(
    <div>
      <h2>Descriptive Text Here</h2>
      <input
        type="text"
        name=""
        value={data.textInput}
        onChange={(event) => {handleChange(event)}}
      />
      {data.searchRespons ? data.searchRespons : null}
    </div>
  );
};

export default SearchBar;

export type {
  SearchBar,
};