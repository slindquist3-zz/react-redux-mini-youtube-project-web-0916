import React, { Component } from 'react'
import { fetchVideos } from "./actions"
import { switchVideos } from "./actions"
import { connect } from 'react-redux'


class Search extends Component {

  constructor(){
    super()

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()
    let searchTerm = e.target.children[0].value
    this.props.dispatch(fetchVideos(searchTerm))

  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input placeholder="Search"></input>
        <button type="submit">Submit</button>
      </form>
    )
  }
}

function mapStateToProps(state) {
  return state
}

const connector = connect(mapStateToProps)(Search)
// const connectedComponent = connector(App)

export default connector;
