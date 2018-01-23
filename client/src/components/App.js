import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Header from './Header';
import SearchBar from './SearchBar';
import Images from './Images';
import PaginationControl from './Pagination';
import Loader from './Loader';

class App extends Component {

    constructor(props) {
        super(props);
        this.state =
        {
            images: {},
            pagination: {
                activePage: 0,
                itemsCountPerPage: 10,
                totalItemsCount: 0,
                pageRangeDisplayed: 5
            },
            searchKey: '',
            displayLoader: false
        };
    }

    //Event Handler for fetching images by search key. It is being called from SearchBar component
    handleFetchImagesFromSplash = () => {

        //Displaying loader
        this.setState((prevState) => {
            return {
                displayLoader: true
            }
        });

        let body = {searchKey: this.state.searchKey, activePage: this.state.pagination.activePage};
        fetch('/api/v1/searchPhotos',
            {
                method: 'POST',
                body:JSON.stringify(body),
                headers: new Headers({
                    'Content-Type': 'application/json'
                })
            })
            .then(res => res.json())
            .then(response =>  {
                let _pagination = this.state.pagination;
                _pagination['totalItemsCount'] = response.total;

                //Setting response in state
                this.setState((prevState) => {
                    return {
                        images: response.results,
                        pagination: _pagination,
                        displayLoader: false
                    }
                });
            })
            .catch(err => {
                console.log(err);
                this.setState((prevState) => {
                    return {
                        displayLoader: false
                    }
                });
            });
    };

    //This function handles any new search
    handleSearchSplash = (searchKey) => {
        let _pagination = this.state.pagination;
        _pagination['activePage'] = 1;
        this.setState((prevState) => {
            return {
                searchKey: searchKey,
                pagination: _pagination
            }
        }, () => {
            this.handleFetchImagesFromSplash();
        });
    };

    //This function handles any page change
    handlePageChange = (pageNumber) => {
        let _pagination = this.state.pagination;
        _pagination['activePage'] = pageNumber;
        this.setState((prevState) => {
            return {
                pagination: _pagination
            }
        });
        this.handleFetchImagesFromSplash();
    };

    //Rendering the component
    render() {
        return (
            <div className='App'>
                <Header />
                <SearchBar searchSplash={this.handleSearchSplash}/>
                <Images images={this.state.images}/>
                {
                    this.state.displayLoader ? <Loader /> : null
                }
                <PaginationControl controls={this.state.pagination} changePage={this.handlePageChange}/>

            </div>
        );
    }
}

//Expected type of property
App.propTypes = {
    handleFetchImagesFromSplash: PropTypes.func,
    handleSearchSplash: PropTypes.func,
    handlePageChange: PropTypes.func
};

export default App;


