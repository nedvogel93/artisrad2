import React from "react";
import axios from "axios";
//import {link} from "react-router-dom";

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
            console.log(this.state.results, "hello")
        });
    }

    render() {
        return (
            this.state.results.map((user) => {
                return (
                    <div>
                        <h3>Works by {user.userName}</h3>
                        {
                            user.Post.map(post => {
                              
                                return (
                                    <div>
                                        <h3>{user.Post.postName}</h3><br />
                                        <img src={user.Post.link} alt={user.Post.postName} className = "center"/>
                                        {/* <Link  to={`/item/${authorId}/${postId}`}>More Info</Link> */}
                                        <br/>
                                    </div>
                                    
                                )
                            })
                        }


                    </div>
                )
            })
        )
    }
}
export default Catalogue;