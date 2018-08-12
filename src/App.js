import React, { Component } from 'react';
import Menu from './components/Menu';
import MovieLibrary from './components/MovieLibrary';
import Content from './components/Content';
import './App.css';



class App extends Component {
  
  constructor (props){
    super(props);
    this.state = {
        switchContent: false
    }
  }

  handleFilmovi = ()=>{
    this.setState({switchContent: false});
   }

   handleProjekcije = ()=>{
    this.setState({switchContent: true});
   }
   
  render() {
    return (
      <div className="App">
       <Menu onFilmovi = {this.handleFilmovi} onProjekcije = {this.handleProjekcije}/>
       <Content switchContent = {this.state.switchContent}/>  
      </div>
    );
  }
}

export default App;
