import React, {Component} from "react";
import "../App.css";
import axios from "axios"


class Login extends Component{
    state={
        username:"",
        password:"",
        error:null,
        id:""
    }

    onStateChange=(event)=>{
        this.setState({[event.target.name]:event.target.value})
    }

    loginCheck = (event)=>{
        console.log("rock on")
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
                <h1>Welcome to The Arttt Review</h1>
                <br />
                <div className="App-header"></div><br />
                <a href="/artist">Artist Page</a>
                <h3>Please log in to begin critiquing/Submitting art!</h3>
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
                                  <button onClick={this.onStateSubmit}>Sign Up</button>
                                  <button onClick={this.loginCheck}>Log In</button>
                                  <h2>{this.state.username}</h2>
                                  <span>{this.state.error}</span>
                                  </div>
                           
        )
    }
}

export default Login;