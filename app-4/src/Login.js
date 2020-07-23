import React, {Component} from 'react';

class Login extends Component {
    constructor(){
        super();

        this.state = {
            username: '',
            password: '',
        }
        this.alertLogin =this.alertLogin.bind(this);
    }
    username(n){
        this.setState({username: n})
    }
    password(p){
        this.setState({password: p})
    }
    alertLogin(){
        alert('Username: {this.state.username} Password: {this.state.password}')
    }
    render(){
        return(
            <div>
                <input
                    onChange={e=> this.username(e.target.value)}
                    type ="text"
                    placeholder ="username"
                />
                <input
                    onChange={e=> this.password(e.target.value)}
                    type ="text"
                    placeholder ="password"
                />
                <button onClick={this.alertLogin}>Login</button>
            </div>
        )
    }
}
export default Login