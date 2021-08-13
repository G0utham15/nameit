import React, {useState} from 'react';
import './App.css';
import Header from './components/header';
import Results from './components/results';
import SearchBar from './components/search';

const name=require("@rstacruz/startup-name-generator");

function App() {
  const [HeaderTitle, setHeaderTitle] = useState("Nameit");
  const [HeaderExpanded, setHeaderExpanded] = useState(true);
  const [SuggestedNames, setSuggestedNames] = useState([])
  const HandleInputChange=(input)=>{
    setHeaderExpanded(!input);
    setSuggestedNames(input?name(input):[]);
  }
  return (
    <div>
      <Header title={HeaderTitle} HeaderExpanded={HeaderExpanded}/>
      <SearchBar HandleInputChange={HandleInputChange}/>
      <Results SuggestedNames={SuggestedNames}/>
    </div>
  );
}

export default App