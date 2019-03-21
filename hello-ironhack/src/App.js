import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <Nav favicon ="/images/ironhack-logo.svg" menu ="/images/menu-top.svg" />
        <h1>Say hello to ReactJS</h1>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <div className = "divBlanco">
            <Card cardImage='/images/icon1.png' title = "Declarative" text = 'React makes it painless to create intereactive UIs.' />
            <Card cardImage='/images/icon2.png' title = 'Components' text = 'React makes it painless to create intereactive UIs.' />
            <Card cardImage='/images/icon3.png' title = 'Single-way'text = 'React makes it painless to create intereactive UIs.'/>
            <Card cardImage='/images/icon4.png' title = 'JSX' text = 'React makes it painless to create intereactive UIs.'/>
          </div>
        </header>
      </div>
    );
  }
}

class Card extends Component {
  render(){
    return(
      <div className ="divInferior">
        <img src={this.props.cardImage} />
        <h2>{this.props.title}</h2>
        <p>{this.props.text}</p>
      </div>
    )
  }
}
class Nav extends Component{
  render(){
    return(
      <div className="nav">
        <img src={this.props.favicon} />
        <img src={this.props.menu} />
      </div>    
    )
  }
}

export default App;
