import React, { Component } from 'react'

class Image extends Component {
  constructor() {
    super()
    this.state = {
      error: null,
      isLoaded: false,
      playerImageUrl: ''
    }
  }

  componentDidMount() {
    fetch(this.props.image_url)
      .then(result => result.url)
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            playerImageUrl: result
          })
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          })
        }
      )
  }

  render() {
    const { error, isLoaded, playerImageUrl } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>
    } else if (!isLoaded) {
      return (
        <div>Image not loaded</div>
      )
    } else {
      return (
        // <div>Image successfully loaded</div>
        <img src={playerImageUrl} alt='player' />
      )
    }
  }
}

export default Image