import React from "react";
import $ from 'jquery';

var UpdatePost = React.createClass({
	getInitialState() {
		return {_id: this.props.data._id, title: this.props.data.title, update_field: false}
	},

	updatePost() {
		this.setState({update_field: true})
	},

	handleChange(e) {
			this.setState({title: e.target.value});
		},

	submitPost(postId, title) {
        $.ajax({
                url: "/api/post",
                type: 'PUT',
                data: { _id: postId, post: title, new: true}
            });
		},
		seeInitialState() {
			console.log("Title: ", this.state.title)
		},

	renderPosts() {
		let post = this.props.data ? this.props.data.map((post, idx) => {
					return (
							<li key={idx}><button onClick={() => this.updatePost()}>Update Post</button>{post.title}</li>
					)
		}) : null

					return (
							<div>{post}</div>
							)
	},
	renderUpdateForm() {
		console.log("Title: ", this.state.title)
        return (
            <form onSubmit={() => this.submitPost(this.state._id, this.state.title)}>
							<input type="text"
								placeholder={this.state.title}
								onChange={this.handleChange}
								value={this.state.title}>
							</input>
							<input type="submit" value="Update Post"></input>
							<input type="button" onClick={this.seeInitialState} value="Initial State"></input>
						</form>
        )
	},
	render() {
		if (this.state.update_field) {
			return this.renderUpdateForm()
		} else {
			return this.renderPosts()
		}
	}
});

export default UpdatePost;
