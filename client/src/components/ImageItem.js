
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../style/image.css';

class ImageItem extends Component {
    render() {
        return (
            <img className='image' src={this.props.src}/>
        );
    }
}

//Expected type of property
ImageItem.propTypes = {};

export default ImageItem;