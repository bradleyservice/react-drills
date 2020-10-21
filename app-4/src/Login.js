import React, {Component} from 'react';

class Login extends Component {
    constructor(){
        super();

        this.state = {
            username: '',
            password: ''
        }
        this.handleLogin = this.handleLogin.bind(this)
    }

    handleChangeUsername(user){
        this.setState({username: user})
    }

    handleChangePassword(pw){
        this.setState({password: pw})
    }

    handleLogin(){
        alert(`Username: ${this.state.username} Password: ${this.state.password}`)
    }

    render(){
        return(
            <div>
                <input type='text' onChange={(e) => this.handleChangeUsername(e.target.value)} />
                <input type='text' onChange={(e) => this.handleChangePassword(e.target.value)} />
                <button onClick={(e) => this.handleLogin(e.target.value)} >Login</button>
            </div>
        )
    }
}

export default Login