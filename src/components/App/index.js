import React, { Component } from 'react';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      locations: [],
    }
  }

  componentDidMount() {
    fetch('http://localhost:8080/locations')
    .then(response => response.json())
    .then(locations => this.setState({ locations }))
  }

  render() {
    console.log(this.state.locations)
    return (
      <div>

      </div>
    );
  }
}

export default App;
