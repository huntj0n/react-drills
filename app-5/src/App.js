import React, {Component} from 'react';
import './App.css';
import Image from "./Components/Image"

export default class App extends Component {
  render (){
    return(
      <div>
        <Image url={'https://makeameme.org/media/templates/250/one-does-not-simply.jpg'}/>
      </div>
    )
  }
}

