import React, { Component } from 'react'
import Image from './image'
import '../App.scss';


class Detail extends Component {


  render() {
    return (
      <div>
        <div className='image'>
          <Image image_url={this.props.player.image_url} />
        </div>
        <div>
          Player Name: {this.props.player.name}
        </div>
        <div>
          Player Position: {this.props.player.position}
        </div>
        {/* There is room for more detail in this view, if wanted. Otherwise, the
        detail component could be used for each list item in the list view. Then, I could use
        conditional rendering of the button to return to the list view from the detail view */}
        <button onClick = { event => {
          this.props.returnToList(event)
        }}>
          Click here to return to the list
        </button>
      </div>
    )
  }
}

export default Detail