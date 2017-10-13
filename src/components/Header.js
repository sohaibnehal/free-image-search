
import React, { Component } from 'react';
import '../style/index.css';

class Header extends Component
{
    render() {
        return (
            <h1 className='text-center'>Free Image Search</h1>
        );
    }
}

//Expected type of property
Header.propTypes = {};

export default Header;