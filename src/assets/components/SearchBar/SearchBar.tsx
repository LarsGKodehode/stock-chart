// Libraries
import {
  BaseSyntheticEvent,
  useState
} from "react";

// Types
interface SearchProps {
  ENV: Object,
};

// Component
function SearchBar(props: SearchProps): JSX.Element {
  // Get props
  const { ENV } = props;

  // State managment
  const [data, setData] = useState({
    textInput: "",
  });

  // Functions
  function handleChange(event: BaseSyntheticEvent) {
    const { value } = event.target;
    console.log(ENV.API_KEY)
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