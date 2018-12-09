import React, { Component } from 'react'
import Image from './image'
import Detail from './detail'

class List extends Component {
  constructor() {
    super()
    this.state = {
      showDetail: false,
      detailPlayer: []
    }

    // this.showDetail = this.showDetail.bind(this);
    // this.showList = this.showList.bind(this);
  }

  showDetail = (event, player) => {
    event.preventDefault()
    this.setState({
      showDetail: true,
      detailPlayer: player
    })
  }

  showList = (event) => {
    event.preventDefault();
    this.setState({
      showDetail: false,
      detailPlayer: []
    })
  }

  render() {
    // console.log(this.props.items);
    // console.log(this.props.items.roster);
    let players = this.props.items.roster;

    // return <div>lists, lists, lists!</div>
    // create async image component and use here
    // use separate component for content?
    // Nope, the data for the image is a URL, so I can just do another fetch inside
    // of the list component.
    // Should I count on the image then loading into cache and passing that data to the
    // detail view, or should I do another fetch in the detail view?
    if (!this.state.showDetail) {
      return (
        <ul>
          {players.map(player => (
            <li
              key = {player.name}
              onClick = {event => {
                this.showDetail(event, player)
              }}
            >
              <Image image_url = { player.image_url } />
              <div>
                Player Name: {player.name}
              </div>
              <div>
                Player Position: {player.position}
              </div>
            </li>
          ))}
        </ul>
      )
    } else {
      return (
        <Detail
          player = { this.state.detailPlayer }
          returnToList = { this.showList }
        />
      )
    }
  }
}

export default List