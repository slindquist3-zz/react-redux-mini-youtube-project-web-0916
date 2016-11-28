import React, { Component } from 'react'
import { connect } from 'react-redux'

class MainVideo extends Component {
  render() {
    let src = `https://www.youtube.com/embed/`
    if (this.props.mainVideo.length === 0) {
      src = src + "dQw4w9WgXcQ"
    } else {
      src = src + this.props.mainVideo.id.videoId
    }
    return (
      <div>
        <iframe width="560" height="315" src={src}></iframe>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {mainVideo: state.mainVideo}
}

const connector = connect(mapStateToProps)(MainVideo)
// const connectedComponent = connector(App)

export default connector;
