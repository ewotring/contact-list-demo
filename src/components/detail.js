import React, { Component } from 'react'
import Image from './image'

class Detail extends Component {
  render() {
    return (
      <div>
        <Image image_url={this.props.player.image_url} />
        <div>
          Player Name: {this.props.player.name}
        </div>
        <div>
          Player Position: {this.props.player.position}
        </div>
      </div>
    )
  }
}

export default Detail