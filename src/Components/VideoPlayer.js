import React, { Component } from 'react'
import ReactPlayer from 'react-player'

class VideoPlayer extends Component {
  render () {
    return (
    		<ReactPlayer
          className='react-player'
          url='https://www.youtube.com/watch?v=6rbPTQIdjmY&index=5&list=RDQMPnkQmO6c5z0'
          width='100%'
          height='400px'
        />
    );
  }
}

const container = {

}

export default VideoPlayer;