import React from "react";
import axios from "axios";

class Item extends Component {
    state = {
        item: {},
        comments: ""
    };
    handleInputChange = (event) => {
        // update any state property with the input value of the same name
        this.setState({
          [event.target.name]: event.target.value
        });
      };
    submitComment = (event) => {
        event.preventDefault();
        axios.post(`/api/${this.props.match.params.authorId}/${this.props.match.params.postId}/comments`, this.state).then((response)=>{
            if (response.data===true) {
                this.setState({
                    comments:""
                });
            }
            else {
                alert("We're sorry, your comment was not posted :(");
            }
        });
    }
   componentDidMount() {
       axios.get(`/api/${this.props.match.params.authorId}/${this.props.match.params.postId}`)
   } 
   render() {
       item = this.state.data.user.post;
       return (
           <div>
               <h1>{item.postName}</h1>
               <br />
               <div>
                   {item.postDescription}
               </div>
               <div>
                   <div>
                      <h3>Comments</h3>
                   </div>
                   <div>
                      {item.comments.map(
                          comment=> 
                          <div>
                            <hr />
                            <p>{comment}</p> 
                          </div>
                      )
                      }
                   </div>
                   <form className="form" onSubmit={this.submitComment}>
                      <input
                         value={this.state.comment}
                         name="comments"
                         onChange={this.handleInputChange}
                         type="text"
                         placeholder="type out your comment here"
                         className="form-control"
                       />
                       <button className="btn btn-outline-primary mt-2">Add Comment</button>
                   </form>
               </div>
           </div>
       )
   }
};
export default Item;