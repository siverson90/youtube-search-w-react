// Create new component, This compentne should product some HTML
import React from "react";
import ReactDOM from "react-dom";

import SearchBar from "./components/search_bar"

const API_key  = 'AIzaSyCR7OU5UP_aYPs7a7pp8pi4gR2Vy2flnzI';

const App =  () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
 
}

// Take this component's generated HTML and put into DOM

ReactDOM.render(<App />, document.querySelector ('.container'))