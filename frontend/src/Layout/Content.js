import React, { Component } from 'react'
import Route from 'react-router-dom';

export default class Content extends Component {

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
    updateVideosHandler = (newContent) => {
        this.setState((state, props) => ({
            showVideos: !state.showVideos
        }));
    }

    changeHandler = (event) => {
        this.setState({
            videos: [
                { id: 1, name: event.target.value, image: "https://www.dailymotion.com/thumbnail/video/x7yt3q0", channelName: "Channel 1", show: true },
                { id: 2, name: event.target.value, image: "https://www.dailymotion.com/thumbnail/video/x7yt3q0", channelName: "Channel 2", show: true },
                { id: 3, name: event.target.value, image: "https://www.dailymotion.com/thumbnail/video/x7yt3q0", channelName: "Channel 3", show: true }
            ]
        });
    }

    render() {
        return (
            <Route path="/" exact component={MainContent} />
            <Route path="/trending" exact component={Trending}/>
        )
    }
}
