import React, {Component} from "react";
import "../../App.css";
import axios from "axios";
//var link = this.state.link
export function uploadSuccess({data}) {
    return {
        type: "UPLOAD_DOCUMENT_SUCCESS",
        data,
    };
}

export function uploadFail(error) {
    return {
        type: "UPLOAD_DOCUMENT_FAIL",
        error,
    };
}

export function uploadDocumentRequest({file, name}){
    let data = new FormData();
    data.append("file",document);
    data.append("name",name)

    return (dispatch) => {
        axios.post("/files", data)
        .then(response => dispatch(uploadSuccess(response)))
        .catch(error => dispatch(uploadFail(error)));
    };
}



class Artist extends Component{
    state={
        postName:"",
        postDescription:"",
<<<<<<< HEAD
        postLink:"",
        artistsArtComments:[],
      
    }
//Collect users own artwork/comments about their artwork
//may have to just hardcode a req.params.id for demo purposes
    componentDidMount=()=>{
        axios.get("/api/:id").then((res)=>{
        this.setState({artistsArtComments:res.data})})
=======
        file: ""
      
      
    }
   
   
    
   handleFileUpload = (event) =>{
        console.log(event.target.files[0])
        this.setState({file:event.target.files[0]})
        
>>>>>>> nuuuubranch
    }


    
    fileChangedHandler = (event) => {
        this.setState({selectedFile: event.target.files[0]})
      }
      
     awesomeFunction = (event) => { 
        event.preventDefault() 
         console.log(this.state.file)
       }

     onStateChange=(event)=>{
        this.setState({[event.target.name]:event.target.value})
     }

    submitArt=(event)=>{
        event.preventDefault()
       
       
         console.log(this.state)
        axios.post(`/api/${this.state.USERIDGOESHERE}`,this.state).then((res)=>{
           if (res.data ===true) {
               console.log('Success!');
               this.setState({
                   postName: "",
                   postDescription: "",
                   file: ""
               })
           }
           else {
               alert("Error! File not posted.")
           }
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
        <input id = "title" value={this.state.postName}
                name="postName"
                type="text"
                onChange={this.onStateChange}
                placeholder=""/>
        </label>
        </form>
        <form>
    <label>Post Description:
        <input id = "description" value={this.state.postDescription}
                name="postDescription"
                type="text"
                onChange={this.onStateChange}
                placeholder=""/>
         
        </label>
      
       
        </form>
        <form>
        <input id = "myUpload" type="file" name = "myUpload" onChange={this.handleFileUpload}/>
      
       </form>
        <button onClick={this.submitArt}>Send</button>
<a href='/'>Home</a>
</div>
    )

    

 
}
}




export default Artist;