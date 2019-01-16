import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome1 from './component/Welcome1';
import Welcome2 from './component/Welcome2';
import Comment from './component/Comment';
import Clock from './component/Clock'
import Clock2 from './component/Clock2'
import TestEvent from './component/HandEvent'
import ConditionRender from './component/ConditionRender'

const comment = {
  date: new Date(),
  text: '这个是评论文案',
  user:{
    name: '李金的名字 ',
    avatarUrl:'http://placekitten.com/g/64/64',
  }
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Welcome1 name='Welcome1'/>
        <Welcome2 name='Welcome2'/>
        <Comment date={comment.date} text={comment.text} user={comment.user}/>
        <Clock/>
        <Clock2/>
        <TestEvent/>
        <ConditionRender/>
      </div>
    );
  }
}

export default App;
