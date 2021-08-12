import React from 'react';
import './App.css';
import Header from './components/header';
import SearchBar from './components/search';
class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      HeaderTitle:"Nameit",
      HeaderExpanded:true
    };
  }
  HandleInputChange=(input)=>{
    this.setState({HeaderExpanded:!input});
  }
  render(){
    return (
      <div>
        <Header title={this.state.HeaderTitle} HeaderExpanded={this.state.HeaderExpanded}/>
        <SearchBar HandleInputChange={this.HandleInputChange}/>
      </div>
    );
  }
  
}

export default App;
