import React from "react";
import Axios from "axios";

//this module is responsible for the display feed of all art uploaded to the site

(Axios.get("/api/users/").then(function(response) {
response.users.map(user => {
    return(
        
        <div> <h3>Works by {user.userName}</h3>
            {
            user.posts.map(post =>{
            return (
                <div>
                        <h3>{post.postName}</h3><br/>
                        <img src={post.postLink}/>
                        <button authorId={user._id} postId={post._id} onClick={this.likeToKnowMore}>More Info</button>
                </div>
            )
            })      
            }
        
        {function likeToKnowMore(a) {
            a.preventDefault();
            console.log("I would like to know more!");
            // navigate to "/Item/{authorId}/{postId}" with axios.get(/api/{authorId}/{postId})
            axios.get(`api/${this.authorId}/${this.postId}`).then(function(response){
                // update state with response
                // redirect to item.js
            })
        }}
        </div>
    )     
});
}))

export default Catalogue;