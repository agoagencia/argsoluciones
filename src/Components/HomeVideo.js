import React, { Component } from 'react'
import ReactPlayer from 'react-player'
import HomeVideo from '../Video/ARGaltacalidad.mp4'
import './homeVideo.css'

class Video extends Component {
    render () {
        return (
    <div className="home_video">
        
        <div className='player'>
            <ReactPlayer
            /* className='react-player fixed-bottom' */
            url={HomeVideo}
            width='100%'
            height='100%'
            controls = {true}
            />
        </div>
        
    </div>
        
        )
    }
}


export default Video;