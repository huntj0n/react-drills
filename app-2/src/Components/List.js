import React, {Component} from 'react';

export default class List extends Component{
    constructor(){
        super();
        this.state = {
            arr: ['Hulka', 'Burning', 'Fudge', 'is', 'better', 'than', 'Stark', 'Raving', 'Hazelnuts']
        };
    }
    render(){
        let hTwos = this.state.arr.map((el)=> <h2 key={el}> {el} </h2>);
        
        return(
            <div>
                {hTwos}
            </div>
        )
    }
}