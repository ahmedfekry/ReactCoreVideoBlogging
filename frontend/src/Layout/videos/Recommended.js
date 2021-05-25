import React, { Component } from 'react'
import SingleVideo from './SingleVideo';

export default class Recommended extends Component {
    state = {
        videos: [
            {
                id: 1,
                name: "Video 1",
                image: "https://www.dailymotion.com/thumbnail/video/x7yt3q0",
                channelName: "Channel 1",
                show: true
            },
            {
                id: 2,
                name: "Video 2",
                image: "https://www.dailymotion.com/thumbnail/video/x7yt3q0",
                channelName: "Channel 2",
                show: true
            },
            {
                id: 3,
                name: "Video 3",
                image: "https://www.dailymotion.com/thumbnail/video/x7yt3q0",
                channelName: "Channel 3",
                show: true
            },
        ],
        showVideos: true
    }
    
    componentDidMount(){
        console.log(this.props);
    }


    render() {
        
        return (
            <div className="container-fluid">
                <div className="video-block section-padding">
                    <div className="row"  >
                        <div className="col-md-12">
                            <div className="main-title">
                                <div className="btn-group float-right right-action">
                                </div>
                                <h4 >Recommended</h4>
                            </div>
                        </div>
                        {
                            this.state.videos.map((video) =>
                                video.show &&
                                <SingleVideo key={video.id} 
                                        name={video.name} image={video.image} 
                                        channelName={video.channelName} />
                            )
                        }
                    </div>
                </div>
            </div>
            // <!-- @endsection -->
        )
    }
}
