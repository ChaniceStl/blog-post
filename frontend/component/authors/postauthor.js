import React from "react"
import $ from "jquery"

var postAuthor = React.createClass({
    getInitialState: function() {
        return { input: "" , data: ""}
    },
    handleChange: function(e) {
        this.setState({ input: e.target.value });
    },
    makeNewAuthor: function(e) {
        e.preventDefault();
        let body = this.state.input;
        $.ajax({
            url: '/api/post',
            type: 'POST',
            data: { post: body }
        });
    },
    changeParentState(data){
    	this.setState({data: data})
    },
    render: function() {
    	const childrenWithProps = React.Children.map(this.props.children,
     (child) => React.cloneElement(child, {
       changeParentState: this.changeParentState,
       data: this.state.data
     })
    );
        return (
        	<div>
           <NavBar/><br/>
            <form onSubmit={ this.makeNewPost }>
	            <input type="text"
	            placeholder="body"
	            value={this.state.input}
	            onChange={this.handleChange}>
	            </input>
	            <input type = "submit" value="submit"></input>
            </form>
           {childrenWithProps}
           </div>
        )
    }
});

export default PostAuthor;
