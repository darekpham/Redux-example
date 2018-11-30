import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// Components
import Posts from './components/posts-component';
import PostForm from './components/post-form-component';

class App extends Component {
  render() {
    return (
      <div className="App">
        <PostForm />
        <Posts />
      </div>
    );
  }
}

export default App;
