import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './App.css';
import store from './store'
import { Provider } from 'react-redux'
import { fetchVideos } from "./actions"


  ReactDOM.render(
    <Provider store={store}>
    <App />
    </Provider>,
    document.getElementById('root')
  );


//wrap app in Provider
//use connect function to get access to store

//grab (5) videos based on search term
  //one video will be embedded in large format in center screen
  //other four will be in a smaller sidebar
  //other four should appear as images until they're in the center position
//when a user clicks a video in the sidebar, it should switch places with the video in the center
  //user should be able to play the video in the center


//state level object will be the app
  //two main keys will be video and sidebar (each will be a part of the state)
  //two reducers, one for each main key
