
import React, { Component } from 'react';
import '../style/image.css';

class ImageItem extends Component {
    render() {
        return (
            <img className='image' src={this.props.src} alt={this.props.description}/>
        );
    }
}

export default ImageItem;