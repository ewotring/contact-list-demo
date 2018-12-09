import React, { Component } from 'react';
import './App.scss';
import List from './components/list'

class App extends Component {
  constructor() {
    super()
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    }
  }

  componentDidMount() {
    fetch("https://assets.gpshopper.com/jc/android_eval.json")
      .then(result => result.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result
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
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>
    } else if (!isLoaded) {
      return (
        <header className="App-header">
          <div>Data loading...</div>
        </header>
      )
    } else {
      return (
        <div className="App">
          <header className="App-header">
            <div>Here's the list!</div>
          </header>
        <List items = { items } />
        </div>
      );
    }
  }
}

export default App;
