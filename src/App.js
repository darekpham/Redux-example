import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// Components
import Posts from './components/posts-component';
import PostForm from './components/post-form-component';
// Redux
import { Provider } from 'react-redux';
import { createStore, applyMiddleware} from 'redux';

const store = createStore(() => [], {}, applyMiddleware());

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <PostForm />
          <Posts />
        </div>
      </Provider>
    );
  }
}

export default App;
