import React, {Component} from "react";
import "./App.css";
import axios from "axios"
//import { PromiseProvider } from "mongoose";
var person={}
class Test extends Component{
    state={
        name:"",
        postName:"",
        postRating:"",
        postDescription:"",
        postLink:"",
        postComments:""
    }

    componentDidMount(){
        axios.get('/fakePath').then((res)=>{
            console.log(res.data)
            
          
           this.setState({name:res.data[0].name})
           this.setState({postName:res.data[0].post[0].postName})
            this.setState({postRating:res.data[0].post[0].postRating})
            this.setState({postDescription:res.data[0].post[0].postDescription})
            this.setState({postLink:res.data[0].post[0].postLink}) 
            console.log(this.state);
        })
       
    }
    
    render(){
        return(
            <h1>Hello there {this.state.name} </h1>
        )
    }
}

export default Test