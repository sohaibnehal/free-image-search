
import React, { Component } from 'react';
import '../style/index.css';
import spinner from '../images/spinner.gif'; // Tell Webpack this JS file uses this image

class Loader extends Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        return (
            <div className='text-center'>
                <img src={spinner} />
            </div>
        );
    }
}

//Expected type of property
Loader.propTypes = {};

export default Loader;