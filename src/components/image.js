import React, { Component } from 'react'

class Image extends Component {
  render() {
    let playerImageURL = this.props.image_url
    return (
      <div>
        Player Image Component: {playerImageURL}
      </div>
    )
  }
}

export default Image