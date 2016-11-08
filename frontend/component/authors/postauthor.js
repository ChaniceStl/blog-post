import React from "react"
import $ from "jquery"

var PostAuthor = React.createClass({
    getInitialState() {
        return { name: "" , email: "", bio: "", articles: []}
    },
    handleChange(propertyName, e) {
      console.log("Property name: ", propertyName, ":", "Event: ", e.target.value)
      var state = this.state;
      state[propertyName] = e.target.value
        this.setState(state);
    },
    makeNewAuthor: function(e) {
        e.preventDefault();
        let body = this.state;
        $.ajax({
            url: '/api/author',
            type: 'POST',
            data: { name: body.name,
                    email: body.email,
                    bio: body.bio,
                    articles: body.articles
                  }
        });
    },
    render() {
        return (
        	<div>
            <form onSubmit={ this.makeNewAuthor }>
	            <input type="text"
                name="name"
                placeholder="Name"
                value={this.state.name}
                onChange={(e) => this.handleChange('name', e)}>
	            </input>

              <input type="email"
                name="email"
                placeholder="Email"
                value={this.state.email}
                onChange={(e) => this.handleChange('email', e)}>
              </input>

              <input type="text"
                name="bio"
                placeholder="Bio"
                value={this.state.bio}
                onChange={(e) => this.handleChange('bio', e)}>
              </input>

              <input type="text"
                name="articles"
                placeholder="Articles"
                value={this.state.articles}
                onChange={(e) => this.handleChange('articles', e)}>
              </input>
              <input type = "submit" value="submit"></input>
            </form>
          </div>
        )
    }
});

export default PostAuthor;
