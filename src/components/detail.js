import React, { Component } from 'react'
import Image from './image'

class Detail extends Component {


  render() {
    console.log(this.props)
    return (
      <div>
        <Image image_url={this.props.player.image_url} />
        <div>
          Player Name: {this.props.player.name}
        </div>
        <div>
          Player Position: {this.props.player.position}
        </div>
        <button onClick = { event => {
          this.props.returnToList(event) }}>
          Click here to return to the list
        </button>
      </div>
    )
  }
}

export default Detail