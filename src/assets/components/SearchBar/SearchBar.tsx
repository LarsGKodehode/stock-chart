// Libraries
import {
  BaseSyntheticEvent,
  useState
} from "react";

// Types
interface SearchProps {
  text: string
};

// Component
function SearchBar(props: SearchProps): JSX.Element {
  // Get props
  const { } = props;

  // State managment
  const [data, setData] = useState({
    textInput: "",
  });

  // functions
  function handleChange(event: BaseSyntheticEvent) {
    const { value } = event.target;
    console.log(value)
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