import React from "react";
import axios from "axios";

class Item extends Component {
    state = {
        item: {}
    }
   componentDidMount() {
       axios.get(`/api/${this.props.match.params.authorId}/${this.props.match.params.postId}`)
   } 
   render() {
       item = this.state.data.user.post;
       return (
           <div>
               <h1>{item.name}</h1>
               <br />
               <div>
                   {item.description}
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
                   {/* <form>
                        code for posting new comment goes here
                        
                     
                   </form> */}
               </div>
           </div>
       )
   }
};
export default Item;