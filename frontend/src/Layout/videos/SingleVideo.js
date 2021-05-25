import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import TestComponent from './TestComponent'

export default class SingleVideo extends Component {
    
    render() {
        return (
            <div className="col-xl-3 col-sm-6 mb-3" >
                <div className="video-card" >
                    <div className="video-card-image">
                        <Link onClick={this.props.click} to="/view-video" className="play-icon" ><i className="fas fa-play-circle"></i></Link>
                        <a href="/" ><img className="img-fluid" src={this.props.image} alt="" /></a>
                        <div className="time"> 2:00 </div>
                    </div>
                    <div className="video-card-body">
                        <div className="btn-group float-right right-action">
                            <a href="#" className="right-action-link text-gray" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
                            </a>
                            <div className="dropdown-menu dropdown-menu-right">
                                <a className="dropdown-item pointerCur" ><i className="fas fa-clock"></i> &nbsp; Add to Watch Later</a>
                            </div>
                        </div>
                        <div className="video-title">
                            <a >{this.props.name}</a>
                        </div>
                        <div className="video-page text-success">
                            <a className="text-success" title="">{this.props.channelName}</a>
                            <input className="form-control" onChange={this.props.change} value={this.props.name} />
                            {/* <TestComponent /> */}
                        </div>
                        <div className="video-view">
                            12 views &nbsp;<i className="fas fa-calendar-alt"></i> video.created_at
                                    </div>

                    </div>
                </div>
            </div>
        )
    }
}
