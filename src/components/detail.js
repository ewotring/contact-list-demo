import React, { Component } from 'react'
import Image from './image'
import '../App.scss';
import '../styles/detail.scss'


class Detail extends Component {


  render() {
    return (
      <div
        className='player-detail'
        onClick = { event => {
          this.props.returnToList(event)
        }}
      >
        <div className='player-image'>
          <Image image_url={this.props.player.image_url} />
        </div>
        <div className='player-content'>
          <div className='player-name'>
            Player Name: {this.props.player.name}
          </div>
          <div className='player-position'>
            Player Position: {this.props.player.position}
          </div>
          {/* There is room for more detail in this view, if wanted. Otherwise, the
          detail component could be used for each list item in the list view. Then, I could use
          conditional rendering of the button to return to the list view from the detail view */}
          <div>
            Select anywhere in this shaded area to return to the list
          </div>
        </div>
      </div>
    )
  }
}

export default Detail