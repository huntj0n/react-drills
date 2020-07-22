import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';

export default class App extends Component{
  constructor(){
    super();
    this.state = {
      items: ''
    }
    this.addItems.bind(this);
    this.handleChange.bind(this);
  }
  addItems(item){
    this.setState({
      items: this.state.items.concat([item])
    })
  }
  handleChange(e){
    this.setState({
      items: e
    })
  }

  render(){
    return(
      <div>
        <h1>Peter Answers</h1>
        <h3>{this.state.items}</h3>
        <input onChange={e=>this.handleChange(e.target.value)} type="text"/>
      </div>
    )
  }
}
