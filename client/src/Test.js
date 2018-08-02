import React, {Component} from "react";
import "./App.css";
import axios from "axios"
//import { PromiseProvider } from "mongoose";

class Test extends Component{
    state={
    //    name:"",
    //     postName:"",
    //     postRating:"",
    //     postDescription:"",
    //     postLink:"",
    //     postComments:"" 
        results:[]
    }

    componentDidMount(){
        axios.get('/api/users').then((res)=>{
            console.log(res.data)
           this.setState({
                results: res.data
            })
            console.log(this.state.results,'follow us to the front!!')
          
            // this.setState({name:res.data[0].userName})
            // this.setState({postName:res.data[0].Post[0].postName})
            // this.setState({postRating:res.data[0].Post[0].postRating})
            // this.setState({postDescription:res.data[0].Post[0].postDescription})
            // this.setState({postLink:res.data[0].Post[0].link}) 
            // console.log(this.state.postLink);
        })
       
    }
    
    render(){
        return(
        // <div>
        //     <h1>Hello there {this.state.name} </h1>
        //     <h3> Post Name: {this.state.postName}</h3>
        //     <h3> Post Rating: {this.state.postRating}</h3>
        //     <h3> Post Description: {this.state.postDescription}</h3>
        //     <img src = {this.state.postLink} />
        // </div>
        this.state.results.map(user => {
            return(
            <div>
                <h3> Work by: {user.userName}</h3>
                <h3> Post Name: {user.Post.postName}</h3>
                <h3> Post Rating: {user.Post.postRating}</h3>
                <h3> Post Description: {user.Post.postDescription}</h3>
                <img src = {user.Post.link} className = "center"/>
                
                <br/>
            </div> 
            )
        })
        )
    }
}

export default Test