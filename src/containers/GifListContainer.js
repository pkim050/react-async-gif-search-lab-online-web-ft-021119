import React from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

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
