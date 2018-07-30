import React, {Component} from "react";
import "../App.css";
import axios from "axios"


class Login extends Component{
    state={
        username:"",
        password:"",
        error:null
    }

    onStateChange=(event)=>{
        this.setState({[event.target.name]:event.target.value})
    }
    onStateSubmit=(event)=>{
        event.preventDefault();
        axios.post('/submit',this.state).then((res)=>{
            if(res.data === true){
                this.props.setLogin()
                this.props.history.push('/')
            }
            else{this.setState({error:"Wrong name or password!"})}
        })
    }

    render(){
        return(
            <div>
                <h1>Who goes there!! Sign in and we shall see...your masterpieces! </h1>
            <form>
                <label>Username:
                    <input value={this.state.username}
                           name="username"
                           onChange={this.onStateChange}
                           type="text"/>
                           </label>
                           </form>
                           <br/>
                           <form>
                           <label>Password:
                           <input value={this.state.password}
                                  name="password"
                                  onChange={this.onStateChange}
                                  type="text"/>
                                  </label>
                                  </form>
                                  <br/>
                                  <button onClick={this.onStateSubmit}>CLICK</button>
                                  <h2>{this.state.username}</h2>
                                  <span>{this.state.error}</span>
                                  </div>
                           
        )
    }
}

export default Login;