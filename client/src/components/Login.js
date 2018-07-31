import React, {Component} from "react";
import "../App.css";
import axios from "axios"


class Login extends Component{
    state={
        username:"",
        password:"",
        signOrLog:"",
        error:null
    }

    onStateChange=(event)=>{
        this.setState({[event.target.name]:event.target.value})
    }
    onStateSubmit=(event)=>{
        event.preventDefault();
        var sog=document.getElementById('signOrLog').value;
        console.log(sog)
       
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
                <h1 className='header'>Who goes there!! Sign in and we shall see...your masterpieces! </h1>
            <div className="signIn">
            <form className='formClass'>
           
            <input type='radio' id='signOrLog' value='signUp' name='signOrLog'/>Sign Up
            <input type='radio' id='signOrLog' value='logIn' name='signOrLog'/>Log in
            
                <label>Username:
                    <input value={this.state.username}
                           name="username"
                           onChange={this.onStateChange}
                           type="text"/>
                           </label>
                         </form>
                         <br/>
                         <form className='formClass'>
                           <label>Password:
                           <input value={this.state.password}
                                  name="password"
                                  onChange={this.onStateChange}
                                  type="text"/>
                                  </label>
                                  </form>
                                  <br/>
                                  <button onClick={this.onStateSubmit} className="loginButton">CLICK</button>
                                 <br/>
                                 <br/>
                                  <span>{this.state.error}</span>
                                  </div>
                                  </div>
                           
        )
    }
}

export default Login;