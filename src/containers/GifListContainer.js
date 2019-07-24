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
        <GifList />
        <GifSearch />
      </div>
    )
  }
}

export default GifListContainer
