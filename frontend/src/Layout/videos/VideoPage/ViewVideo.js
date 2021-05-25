import React, { Component } from 'react'

export default class ViewVideo extends Component {
    render() {
        return (
            <div className="container-fluid pb-0">
               <div className="video-block section-padding">
                  <div className="row">
                     <div className="col-md-8">
                        <div className="single-video-left">
                           <div className="single-video">
                              <iframe width="100%" height="315" src="https://www.youtube-nocookie.com/embed/8LWZSGNjuF0?rel=0&amp;controls=0&amp;showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                           </div>
                           <div className="single-video-title box mb-3">
                              <h2><a href="#">Contrary to popular belief, Lorem Ipsum (2019) is not.</a></h2>
                              <p className="mb-0"><i className="fas fa-eye"></i> 2,729,347 views</p>
                           </div>
                           <div className="single-video-author box mb-3">
                              <div className="float-right"><button className="btn btn-danger" type="button">Subscribe <strong>1.4M</strong></button> <button className="btn btn btn-outline-danger" type="button"><i className="fas fa-bell"></i></button></div>
                              <img className="img-fluid" src="img/s4.png" alt=""/>
                              <p><a href="#"><strong>Osahan Channel</strong></a> <span title="" data-placement="top" data-toggle="tooltip" data-original-title="Verified"><i className="fas fa-check-circle text-success"></i></span></p>
                              <small>Published on Aug 10, 2018</small>
                           </div>
                           <div className="single-video-info-content box mb-3">
                              <h6>Cast:</h6>
                              <p>Nathan Drake , Victor Sullivan , Sam Drake , Elena Fisher</p>
                              <h6>Category :</h6>
                              <p>Gaming , PS4 Exclusive , Gameplay , 1080p</p>
                              <h6>About :</h6>
                              <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved overVarious versions have evolved over the years, sometimes </p>
                              <h6>Tags :</h6>
                              <p className="tags mb-0">
                                 <span><a href="#">Uncharted 4</a></span>
                                 <span><a href="#">Playstation 4</a></span>
                                 <span><a href="#">Gameplay</a></span>
                                 <span><a href="#">1080P</a></span>
                                 <span><a href="#">ps4Share</a></span>
                                 <span><a href="#">+ 6</a></span>
                              </p>
                           </div>
                        </div>
                     </div>
                     <div className="col-md-4">
                        <div className="single-video-right">
                           <div className="row">
                              <div className="col-md-12">
                                 <div className="adblock">
                                    <div className="img">
                                       Google AdSense<br/>
                                       336 x 280
                                    </div>
                                 </div>
                                 <div className="main-title">
                                    <div className="btn-group float-right right-action">
                                       <a href="#" className="right-action-link text-gray" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                       Sort by <i className="fa fa-caret-down" aria-hidden="true"></i>
                                       </a>
                                       <div className="dropdown-menu dropdown-menu-right">
                                          <a className="dropdown-item" href="#"><i className="fas fa-fw fa-star"></i> &nbsp; Top Rated</a>
                                          <a className="dropdown-item" href="#"><i className="fas fa-fw fa-signal"></i> &nbsp; Viewed</a>
                                          <a className="dropdown-item" href="#"><i className="fas fa-fw fa-times-circle"></i> &nbsp; Close</a>
                                       </div>
                                    </div>
                                    <h6>Up Next</h6>
                                 </div>
                              </div>
                              <div className="col-md-12">
                                 <div className="video-card video-card-list">
                                    <div className="video-card-image">
                                       <a className="play-icon" href="#"><i className="fas fa-play-circle"></i></a>
                                       <a href="#"><img className="img-fluid" src="img/v1.png" alt=""/></a>
                                       <div className="time">3:50</div>
                                    </div>
                                    <div className="video-card-body">
                                       <div className="btn-group float-right right-action">
                                          <a href="#" className="right-action-link text-gray" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                          <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
                                          </a>
                                          <div className="dropdown-menu dropdown-menu-right">
                                             <a className="dropdown-item" href="#"><i className="fas fa-fw fa-star"></i> &nbsp; Top Rated</a>
                                             <a className="dropdown-item" href="#"><i className="fas fa-fw fa-signal"></i> &nbsp; Viewed</a>
                                             <a className="dropdown-item" href="#"><i className="fas fa-fw fa-times-circle"></i> &nbsp; Close</a>
                                          </div>
                                       </div>
                                       <div className="video-title">
                                          <a href="#">Here are many variati of passages of Lorem</a>
                                       </div>
                                       <div className="video-page text-success">
                                          Education  <a title="" data-placement="top" data-toggle="tooltip" href="#" data-original-title="Verified"><i className="fas fa-check-circle text-success"></i></a>
                                       </div>
                                       <div className="video-view">
                                          1.8M views &nbsp;<i className="fas fa-calendar-alt"></i> 11 Months ago
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
        )
    }
}
