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
                        <button aurthorID={user._id} postId={post._id}>More Info</button>
                </div>
            )
            })      
        }</div>
    )
     
});

}))

export default Catalogue;