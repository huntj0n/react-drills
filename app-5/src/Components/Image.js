import React, {Component} from 'react';

export default class Image extends Component {
    render(){
        return(
            <div>
                <img src={this.props.url}/>
                <div>One does not simply learn React</div>
            </div>
        )   
    }
}