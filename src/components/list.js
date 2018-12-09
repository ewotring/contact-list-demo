import React, { Component } from 'react'
import Image from './image'
import Detail from './detail'
import '../App.scss';
import '../styles/list.scss'


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
    let players = this.props.items.roster;

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
              <div className='player-image'>
                <Image image_url = { player.image_url } />
              </div>
              <div className='player-content'>
                <div className='player-name'>
                  Player Name: {player.name}
                </div>
                <div className='player-position'>
                  Player Position: {player.position}
                </div>
                <div>
                  Select anywhere in this shaded area to view player detail
                </div>
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