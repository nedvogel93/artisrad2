import React, {Component} from "react";
import "../../App.css";
import axios from "axios";

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
        link: "",
        file: {}
      
    }
   
   
    
   handleFileUpload = (event) =>{
        console.log(event.target.files[0])
        this.setState({file:event.target.files[0]})
        
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
       
     var formData = new FormData();

     formData.append("postName", this.state.postName);
     formData.append("postDescription", this.state.postDescription);
     formData.append("file", this.state.file);
         console.log(FormData)
        axios.post("/5b5a3b11eb65072dbfa61da8/newpost", this.state
           ).then((res)=>{
           console.log("ihateeverything")
            if (res.data ===true) {
               console.log('Success!');
               this.setState({
                   postName: "",
                   postDescription: "",
                   link:"",
                   file:{}
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

<div className="artAndComments">

  
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

           <label>Post Name:
        <input id = "post" value={this.state.link}
                name="linkie"
                type="text"
                onChange={this.onStateChange}
                placeholder=""/>
        </label>
        </form>
        <form> 
    <label> Add Link:
        <input id = "description" value={this.state.postDescription}
                name="postDescription"
                type="text"
                onChange={this.onStateChange}
                placeholder=""/>
         
        </label>
       </form>

       <form>
       <label>Add Link:
        <input id = "hooray" value={this.state.link}
                name="postiepost"
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