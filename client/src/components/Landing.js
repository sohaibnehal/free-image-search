import React, { Component } from 'react';

class Landing extends Component {
    //Rendering the component
    render() {
        return (
            <div className='LandingPage'>

                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="/">Free Image Search</a>
                </nav>

                <div className='container text-center'>

                        <div className="row pb-3">
                            <div className="col-md-2"></div>
                            <div className="col">
                                <div className="input-group">
                                    <input type="text" className="form-control input-lg"
                                           placeholder="Enter email address"
                                           id="email-address-of-user" />
                                    <br/>
                                        <button type="button" className="btn btn-lg btn-success mt-5" id="send-list-of-cookies-button">Join</button>
                                </div>
                            </div>
                            <div className="col-md-2"></div>
                        </div>
                </div>
            </div>
        );
    }
}

export default Landing;


