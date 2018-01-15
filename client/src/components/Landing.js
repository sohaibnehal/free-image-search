import React, { Component } from 'react';


class Landing extends Component {
    //Rendering the component
    render() {
        return (
            <div className='LandingPage'>
                <h1>Hello World</h1>
                <a href='/search'>Go to Search Page</a>
            </div>
        );
    }
}

export default Landing;


