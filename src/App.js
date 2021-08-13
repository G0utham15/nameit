import React from 'react';
import './App.css';
import Header from './components/header';
import Results from './components/results';
import SearchBar from './components/search';

const name=require("@rstacruz/startup-name-generator");

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      HeaderTitle:"Nameit",
      HeaderExpanded:true,
      SuggestedNames:[]
    };
  }
  HandleInputChange=(input)=>{
    this.setState({HeaderExpanded:!input, SuggestedNames:input?name(input):[]});
  }
  render(){
    
    return (
      <div>
        <Header title={this.state.HeaderTitle} HeaderExpanded={this.state.HeaderExpanded}/>
        <SearchBar HandleInputChange={this.HandleInputChange}/>
        <Results SuggestedNames={this.state.SuggestedNames}/>
      </div>
    );
  }
  
}

export default App;
