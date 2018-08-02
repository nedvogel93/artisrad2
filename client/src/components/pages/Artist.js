import React, {Component} from "react";
import "../../App.css";
import axios from "axios";


class Artist extends Component{
    state={
        
    
            postName:"",
            postDescription:"",
            link:"",
            comments:[]
            
    }
//Collect users own artwork/comments about their artwork
//may have to just hardcode a req.params.id for demo purposes
    // componentDidMount=()=>{
    //     axios.get("/api/:id").then((res)=>{
    //     this.setState({artistsArtComments:res.data})})
    // }

  

    onStateChange=(event)=>{
        this.setState({[event.target.name]:event.target.value})
    }

    submitArt=(event)=>{
        event.preventDefault()
       
       
        console.log(this.state)
        axios.post('/5b6219dbc3d67b341874ee27/newpost',this.state).then((res)=>{
            
        console.log(res, this.state)
        })
    }

render(){
    return(
        <div>
   
<h1 className='header'>Artist Page</h1>
{/* // A div container that will map thru an individuals
       pictures, picture names and comments about picture */}
<div className="comments">
{this.state.comments.map(artistItem=>{
    <h4>{artistItem.postName}</h4>
    // <img src={artistItem.Post.link}/>
    // <ul>
        // <li>{artistItem.Post.comments}</li>
        // </ul>
})}
</div>
<div className = "center">
<form>
    <label>Post Name:
        <input value={this.state.postName}
                name="postName"
                type="text"
                onChange={this.onStateChange}
                placeholder=""/>
        </label>
        </form>
        <form>
    <label>Post Description:
        <input value={this.state.postDescription}
                name="postDescription"
                type="text"
                onChange={this.onStateChange}
                placeholder=""/>
        </label>
        </form>
        <form>
    <label>Post Link:
        <input value={this.state.link}
                name="link"
                type="text"
                onChange={this.onStateChange}
                placeholder=""/>
        </label>
        </form>
        <button onClick={this.submitArt}>Send</button>
<a href='/'>Home</a>
</div>
</div>
    )
}
}


export default Artist;