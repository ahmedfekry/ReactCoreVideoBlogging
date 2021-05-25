import React, { Component } from 'react'
import Footer from "./Footer";
import {Route} from "react-router-dom";
import Trending from './videos/Trending';
import Recommended from './videos/Recommended';
import ViewVideo from './videos/VideoPage/ViewVideo';

export default class MainContent extends Component {
    render() {
        return (
            <div className="single-channel-page" id="content-wrapper">
                <Route path="/" exact component={Recommended} />
                <Route path="/trending" exact component={Trending}/>
                <Route path="/view-video" exact component={ViewVideo} />
                <Footer/>
            </div>
        )
    }
}
