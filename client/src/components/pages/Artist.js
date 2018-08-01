import React, {Component} from "react";
import "../../App.css";
import axios from "axios";


class Artist extends Component{
    state={
        postName:"",
        postDescription:"",
        postLink:"",
        artistsArtComments:[],
      
    }
//Collect users own artwork/comments about their artwork
//may have to just hardcode a req.params.id for demo purposes
    componentDidMount=()=>{
        axios.get("/api/:id").then((res)=>{
        this.setState({artistsArtComments:res.data})})
    }

  

    onStateChange=(event)=>{
        this.setState({[event.target.name]:event.target.value})
    }

    submitArt=(event)=>{
       event.preventDefault()
       
       
        console.log(this.state)
        axios.post('/api',this.state).then((res)=>{
          console.log(res)
        })
    }

render(){
    return(
        <div>
   
<h1 className='header'>Artist Page</h1>
{/* // A div container that will map thru an individuals
       pictures, picture names and comments about picture */}
<div className="artAndComments">
{this.state.artistsArtComments.map(artistItem=>{
    <h4>{artistItem.Post.postName}</h4>
    // <img src={artistItem.Post.link}/>
    // <ul>
        // <li>{artistItem.Post.comments}</li>
        // </ul>
})}
</div>
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
        <input value={this.state.postLink}
                name="postLink"
                type="text"
                onChange={this.onStateChange}
                placeholder=""/>
        </label>
        </form>
        <button onClick={this.submitArt}>Send</button>
<a href='/'>Home</a>
</div>
    )

    

 
}
}


export default Artist;