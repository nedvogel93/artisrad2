import React, {Component} from "react";
import "./App.css";
import {BrowserRouter as Router,Route,Switch,Redirect} from "react-router-dom";
import Home from "./components/Home.js";
import Login from "./components/Login.js";
import Artist from "./components/pages/Artist.js";
import axios from "axios";
import Catalogue from "./components/pages/Catalogue.js";
import Item from "./components/pages/Item.js";
import Test from "./Test.js"




class App extends Component{
  state={
    loaded:false,
    authenticated:false,
    
  }

  componentDidMount=()=>{
    axios.get("/auth").then((res)=>{
      this.setState({loaded:true,
                     authenticated:res.data})
    })
  }
    setLogin=()=>{
      this.setState({authenticated:true})
    }

    setData=(a)=>{
      this.setState({data:a})
    }

    render(){
      if(!this.state.loaded){
        return null
      }
      return(
        <Router>
          <div>
            <Switch>
              <Route exact path="/login" render={(props)=><Login {...props} setLogin={this.setLogin}/>}/>
              {/* {!this.state.authenticated ? <Redirect to='/login'/> : null} */}
              <Route exact path="/" component={Home}/>
              <Route exact path="/artist" component={Artist}/>
              <Route exact path= "/catalogue" component ={Catalogue}/>
              <Route exact path="/item/:authorId/:postId" component = {Item}/>
              <Route exact path="/test" component={Test}/>
             
              </Switch>
              </div>
              </Router>
      )
    }
  
}

export default App;