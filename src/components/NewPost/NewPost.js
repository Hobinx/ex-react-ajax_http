import React, { Component } from 'react';

import './NewPost.css';

class NewPost extends Component {
  state = {
    title: '',
    content: '',
    author: 'Max'
  };

  render() {
    return (
      <div className="NewPost">
        <h1>Add a Post</h1>
        <label>Title</label>
        <input
          type="text"
          value={this.state.title}
          onChange={evt => this.setState({ title: evt.target.value })}
        />
        <label>Content</label>
        <input
          type="text"
          value={this.state.content}
          onChange={evt => this.setState({ content: evt.target.value })}
        />
        <label>Author</label>
        <input
          type="text"
          value={this.state.author}
          onChange={evt => this.setState({ author: evt.target.value })}
        />
        <select
          value={this.state.author}
          onChange={evt => this.setState({ author: evt.target.value })}
        >
          <option value="Max">Max</option>
          <option value="Manu">Manu</option>
        </select>
        <button>Add Post</button>
      </div>
    );
  }
}

export default NewPost;
