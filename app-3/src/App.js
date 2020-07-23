import React, {Component} from 'react';
import './App.css';

export default class Filter extends Component{
  constructor(){
    super();
    this.state = {
      toDo: ['chill', 'not code', 'cry', 'not study React', 'Netflix', 'Halo: Infinite'],
      filtered: [],
    }

  }
  handleChange(val){
    this.setState({filtered: val})
  }

  render(){
    let items = this.state.toDo.filter((e, i) => {return e.includes(this.state.filtered);}).map((e, i) => {return e.includes(this.state.filtered)})

    return(
      <div>
        <h1>ToDo Items to Procrastinate</h1>
        <div>
          <span><h3>ToDo Items:</h3> {this.state.toDo.map((el)=> <li key={el}> {el} </li>)}</span>
          <input onChange={(e)=> this.handleChange(e.target.value)}/>
          <button>Filtered</button>
        </div>
        <div>
          <span><h3>Filtered Items:</h3> {this.state.filtered.map((el)=> <li key={el}> {el} </li>)}</span>
          {items}
        </div>
      </div>
    )
  }
}
