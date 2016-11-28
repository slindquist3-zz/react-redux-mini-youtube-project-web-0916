import React, { Component } from 'react'
import { connect } from 'react-redux'
import { switchVideos } from './actions'

class Sidebar extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {
    debugger
    this.props.switchVideos(e.target.src)
  }

  componentWillReceiveProps(){
    debugger
  }

  render() {
    if (this.props.sidebar.length === 0) {
      return <div></div>
    } else {
      let thumbs = this.props.sidebar.map(function(thumb) {
        return <li key={thumb.snippet.thumbnails.medium.url}><img src ={thumb.snippet.thumbnails.medium.url} onClick={this.handleClick}/></li>
      }.bind(this))
      return(
        <ul>{thumbs}</ul>
      )
    }
  }
}

function mapStateToProps(state) {
  return {sidebar: state.sidebar}
}

const connector = connect(mapStateToProps, {switchVideos})(Sidebar)
// const connectedComponent = connector(App)

export default connector;
