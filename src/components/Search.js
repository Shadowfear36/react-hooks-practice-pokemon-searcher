import React from "react";

function Search({ inputText, setInputText}) {

  const handleSearch = (input) => {
    setInputText(input.target.value);
  }

  return (
    <div className="ui search">
      <div className="ui icon input">
        <input onChange={handleSearch} className="prompt" value={inputText}/>
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
