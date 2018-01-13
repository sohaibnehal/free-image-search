
import React, { Component } from 'react';
import ImageItem from './ImageItem';
import '../style/index.css';

class Images extends Component {
    render() {
        let imageItems;
        if (this.props.images.length) {
            imageItems = this.props.images.map((image, index) => {
                return (
                    <ImageItem key={index} src={image.urls.small} description={image.description}/>
                );
            });
        }
        return (
            <div className='Images text-center'>
                {imageItems}
            </div>
        );
    }
}

export default Images;