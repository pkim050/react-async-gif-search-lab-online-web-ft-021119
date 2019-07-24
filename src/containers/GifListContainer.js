import React from 'react'

class GifListContainer extends React.Component {
  state = {}

  componentDidMount() {
    fetch('')
    .then(resp => resp.json())
    .then(json => {
      this.setState({
        data: json
      })
    })
  }

  render() {
    return(
      <div>

      </div>
    )
  }
}

export default GifListContainer
