import React from "react";
import axios from "axios";
import {Link} from "react-router-dom";

//this module is responsible for the display feed of all art uploaded to the site
class Catalogue extends React.Component {
    state = {
        results: []
    }
    componentDidMount() {
        axios.get("/api/users/").then((response) => {
            this.setState({
                results: response.data
            })
        });
    }

    render() {
        return (
<<<<<<< HEAD
            this.state.results.map(user => {
                
=======
            this.state.results.map((user) => {
>>>>>>> 5127282db32f473cbf258f97afa9ee647736672a
                return (
                    <div>
                        <h3>Works by {user.userName}</h3>
                        {
                            user.Post.map(post => {
<<<<<<< HEAD
                                let authorId=user._id
                                let postId=user.Post._id;
                                return (
                                    <div>
                                        <h3>{post.postName}</h3><br />
                                        <img src={post.postLink} />
                                        <Link to={`/item/${authorId}/${postId}`}>More Info</Link>
=======
                                let authorId=user._id;
                                let postId=post._id;
                                return (
                                    <div>
                                        <h3>{post.postName}</h3><br />
                                        <img src={post.link} alt={post.postName} className = "center"/>
                                        {/* <Link  to={`/item/${authorId}/${postId}`}>More Info</Link> */}
>>>>>>> 5127282db32f473cbf258f97afa9ee647736672a
                                    </div>
                                )
                            })
                        }


                    </div>
<<<<<<< HEAD
            )
=======
                )
>>>>>>> 5127282db32f473cbf258f97afa9ee647736672a
            })
        )
    }
}
export default Catalogue;