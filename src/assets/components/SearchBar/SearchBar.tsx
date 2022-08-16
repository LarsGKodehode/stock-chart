// Libraries
import {
  BaseSyntheticEvent,
  useState
} from "react";

// Types
interface SearchProps {
  API_KEY: string,
  API_ENDPOINT: string,
};

// Component
function SearchBar(props: SearchProps): JSX.Element {
  // Get props
  const { API_KEY} = props;

  // State managment
  const [data, setData] = useState({
    textInput: "",
  });

  // functions
  function handleChange(event: BaseSyntheticEvent) {
    const { value } = event.target;
    console.log(API_KEY)
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
    </div>
  );
};

export default SearchBar;

export type {
  SearchBar,
};