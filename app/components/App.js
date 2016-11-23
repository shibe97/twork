import React, { Component } from 'react';
import Navigation from './Molecules/Navigation/Navigation';
import PostForm from '../containers/Molecules/PostForm';

export default class App extends Component {
  componentDidMount() {
    this.props.requestStreamUser();
  }

  render() {
    return (
      <div className="App">
        <div className="App__left">
          <Navigation resetTimeline={this.props.resetTimeline} pathname={this.props.pathname} />
        </div>
        <div className="App__right">
          <PostForm />
          {this.props.children}
        </div>
      </div>
    );
  }
}
