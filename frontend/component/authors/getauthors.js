import React from "react"
import $ from "jquery"

 var GetAuthor = React.createClass({

    componentDidMount: function() {
        var that = this;
        $.ajax({
            url: "/api/author",
            type: 'GET',
            success: function(data) {
               that.props.changeParentState(data);
            }
        })
    },
    render() {
        let author = this.props.data ? this.props.data.map((author, idx) => {
            return <li key={idx}>{author.title}</li>
        }) : null
        return (
        	 <ul>
             {author}
        	 </ul>
        	 )
   		 }
});

 export default GetAuthor;
