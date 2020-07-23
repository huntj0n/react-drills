import React, {Component} from 'react';
import Todo from "./Todo";

export default class App extends Component {
  constructor(){
    super();

    this.state = {
      todos: [],
      input: ''
    };

    this.addTodo = this.addTodo.bind(this);
  }

  input(val){
    this.setState({input: val})
  }
  addTodo(){
    this.setState({
      todos: [this.state.todos, this.state.input],
      input: ''
    });
  }

  render(){
    let todos = this.state.todos.map((el, i)=> {
      return <Todo ket={i} task={el}/>
    });

    return(
      <div>
        <h1>My ToDo List</h1>      
        <div>
          <input
            value={this.state.input}
            placeholder="add a new ToDo"
            onChange={e => this.input(e.target.value)}
          />
          <button onClick={this.addTodo}>Add</button>
        </div>
        <br/>
        {todos}
      </div>
    );
  }
}


