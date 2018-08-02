/*import React, { Component } from "react";
import SearchForm from "./SearchForm";
import Navbar from "./Navbar";
// import API from "../utils/API";
import "./Home.css";
import axios from "axios"
import { BrowserRouter as Router, Route } from "react-router-dom";

export default Home;*/


import "./Home.css";
// import SearchForm from "./SearchForm";
import React from "react";
import "../App.css";
import Test from "../Test.js"
import {Link} from "react-router-dom";
import {Route} from "react-router-dom";

var x="justin";
const addToTest=()=>{
    return(
    <Test asshole={x}/>
    )
}

const Home = ()=>{
return(
    <div>
 
<h1>Welcome to The Arttt Review</h1>
<br />
<div className="App-header"></div><br />
 {/* <h3>Search for and annotate articles of interest!</h3> */}
     <br />
     
     
<Route exact path="/test" render={addToTest} />
<Link to="/catalogue">Gallery</Link>
<a href='/artist'>Create new post </a>
<div class="footer"><strong>	&copy;</strong>Arttt Review 2018</div>
</div>

)
}
console.log("hello")
export default Home;