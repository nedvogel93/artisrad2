import React from "react";
import Axios from "axios";

//this module is responsible for the display feed of all art uploaded to the site

(Axios.get("/").then(function(response) {
response.users.map(user => {
            user.posts.map(post =>{
            return (
                <div>
                    <h3>{post.postName}</h3><br/>
                    {post.postLink}
                    <button id={post._id} >More Info</button>
                </div>
            )
        })
     
});

}))

export default Catalogue;