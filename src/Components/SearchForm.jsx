import { useState } from "react";
import { useGlobalContext } from "../AppContext";

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();

  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    setSearchTerm(value);
  };

  return (
    <section>
      <h1 className="title">unsplash image</h1>
      <form action="" className="search-form">
        <input
          type="text"
          name="search"
          value={value}
          placeholder="cat"
          className="form-input search-input"
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        <button className="btn" type="submit" onClick={handleSubmit}>
          submit
        </button>
      </form>
    </section>
  );
};
export default SearchForm;
