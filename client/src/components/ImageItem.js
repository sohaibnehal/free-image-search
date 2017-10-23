
import React, { Component } from 'react';
import '../style/image.css';

class ImageItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <img className='image' src={this.props.src}/>
        );
    }
}

//Expected type of property
ImageItem.propTypes = {};

export default ImageItem;