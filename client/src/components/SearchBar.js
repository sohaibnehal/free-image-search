
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../style/searchbar.css';

class SearchBar extends Component {

    handleFetchImages = () => {
        if (this.refs.searchKey.value) {
            this.props.searchSplash(this.refs.searchKey.value);
        }
    };

    render() {
        return (
            <div className='SearchBar'>
                <input placeholder='Enter Search Key' type='text' ref='searchKey' className='search-box'/>
                <br />
                <button onClick={this.handleFetchImages} className='search-button'>Search</button>
            </div>
        );
    }
}

//Expected type of property
SearchBar.propTypes = {
    handleFetchImages:  PropTypes.func
};

export default SearchBar;