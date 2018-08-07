import React, {Component} from "react";
import "./App.css";
import {BrowserRouter as Router,Route,Switch,Redirect} from "react-router-dom";
import Home from "./components/Home.js";
import Login from "./components/Login.js";
import Artist from "./components/pages/Artist.js";
import Catalogue from "./components/pages/Catalogue.js";
import axios from "axios";
import Test from "./Test.js"
import NavTabs from "./components/NavTabs.js"




class App extends Component{
  state={
    loaded:false,
    authenticated:false,
    
  }

  componentDidMount=()=>{
    axios.get("/auth").then((res)=>{
      this.setState({loaded:true,
                     authenticated:true})
    })
  }
    setLogin=()=>{
      this.setState({authenticated:true})
    }

    render(){
      if(!this.state.loaded){
        return null
      }
      return(
        <Router>
          <div>
            <NavTabs />
            <Switch>
              <Route exact path="/login" render={(props)=><Login {...props} setLogin={this.setLogin}/>}/>
              {!this.state.authenticated ? <Redirect to='/login'/> : null}
              <Route exact path="/" component={Home}/>
              <Route exact path="/catalogue" component={Catalogue}/>
              <Route exact path="/artist" component={Artist}/>
              <Route exact path="/test" component={Test}/>
             
            </Switch>
            </div>
          </Router>
      )
    }
  
}

export default App;