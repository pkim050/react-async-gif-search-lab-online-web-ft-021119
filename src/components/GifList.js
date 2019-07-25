import React from 'react'

class GifList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      gif: props
    }
  }

  render() {
    return(
      <ul>
        <li>{this.state.gif}</li>
      </ul>
    )
  }
}

export default GifList
