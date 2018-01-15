import React, { Component } from 'react';


class NotFound extends Component {
    //Rendering the component
    render() {
        return (
            <div className='LandingPage'>
                <h1>Not Found</h1>
                <a href='/search'>Got to search</a>
            </div>
        );
    }
}

export default NotFound;


