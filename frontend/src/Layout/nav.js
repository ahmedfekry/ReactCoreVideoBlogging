import React, { Component } from "react";
import { Link } from "react-router-dom";

class Nav extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand navbar-light bg-white static-top osahan-nav sticky-top">
                    <button className="btn btn-link btn-sm text-secondary menu-button">
                        <i className="fas fa-bars"></i>
                    </button>
                    <a className="navbar-brand mr-1" ><img className="img-logo" alt="Yalla Video" src="img/logo.png" /></a>
                    <ul className="navbar-nav ml-auto ml-md-0 osahan-left-navbar menu-header">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">
                                <i className="fas fa-fw fa-home"></i>
                                <span>Home</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={{
                                pathname: "trending",
                                hash: '#submit',
                                search: '?newpage=true'
                            }}>
                                <i className="fas fa-fw fa-fire"></i>
                                <span>Trending</span>
                            </Link>
                        </li>
                        {/* <li className="nav-item">
                            <a className="nav-link" >
                                <i className="fas fa-play"></i>
                                <span>Library</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" >
                                <i className="fas fa-bell"></i>
                                <span>Subscriptions</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">
                                <i className="fas fa-bell"></i>
                                <span>video-channel</span>
                            </a>
                        </li> */}
                    </ul >
                    {/* < !--Navbar Search-- > */}
                    <form className="d-md-inline-block form-inline ml-auto mr-0 mr-md-5 my-2 my-md-0 osahan-navbar-search" >
                        <div className="input-group">
                            <input type="text" className="form-control" name="text" placeholder="Search for..." required />
                            <div className="input-group-append">
                                <button className="btn btn-light" type="submit" >
                                    <i className="fas fa-search"></i>
                                </button>
                            </div>
                        </div>
                    </form >
                    <ul className="navbar-nav ml-auto ml-md-0 osahan-right-navbar">

                        <li className="nav-item mx-1">
                            <a className="nav-link">
                                <i className="fas fa-plus-circle fa-fw"></i>Upload Video
                            </a>
                        </li>
                        <li className="nav-item dropdown no-arrow osahan-right-navbar-user" >
                            {/* <a className="nav-link dropdown-toggle user-dropdown-link" dropdownToggle href="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <img alt="Avatar" src="img/user.png" />User
                            </a> */}
                            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="userDropdown"  >
                                <a className="dropdown-item" > <i className="fas fa-fw fa-cog"></i> &nbsp; Settings</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal">
                                    <i className="fas fa-fw fa-sign-out-alt"></i> &nbsp; Logout</a>
                            </div>
                        </li >
                        <li className="nav-item login-icon mx-1" >
                            <a className="nav-link" >
                                <i className="fas fa-user"></i>Sign In
                            </a>
                        </li>
                    </ul >
                </nav >

                {/* // < !--Logout Modal-- > */}
                <div className="modal fade" id="logoutModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-sm modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
                                <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">Select "Logout" below if you are ready to end your current session.</div>
                            <div className="modal-footer">
                                <button className="btn btn-secondary" type="button" data-dismiss="modal" >Cancel</button>
                                <button type="button" className="btn btn-primary">Logout</button>
                            </div>
                        </div>
                    </div>
                </div >
                
            </div>
        );

    }
}

export default Nav;
