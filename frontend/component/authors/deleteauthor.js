import React from "react";
import $ from 'jquery';

var DeletePost = React.createClass({
    deletePost: function(postId) {
        $.ajax({
                url: "/api/post",
                type: 'DELETE',
                data: { _id: postId }
            });
		},
render: function() {
    let post = this.props.data ? this.props.data.map((post, idx) =>{
        return (
            <li key={idx}><button onClick={()=>this.deletePost(post._id)}>Delete Post</button>{post.title}</li>
        )
    }) : null


    return (
    		<div>
          {post}
        </div>
   	    )
	}
});

export default DeletePost;
