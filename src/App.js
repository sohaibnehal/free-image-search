
import React, { Component } from 'react';
import Unsplash , { toJson } from 'unsplash-js';

import Header from './components/Header';
import SearchBar from './components/SearchBar';
import Images from './components/Images';
import PaginationControl from './components/Pagination';
import Loader from './components/Loader';

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
            displayLoader : false
        };
        this.handleFetchImagesFromSplash = this.handleFetchImagesFromSplash.bind(this);
        this.handleSearchSplash = this.handleSearchSplash.bind(this);
        this.handlePageChange = this.handlePageChange.bind(this);
    }

    //Event Handler for fetching images by search key. It is being called from SearchBar component
    handleFetchImagesFromSplash() {

        this.setState({
                displayLoader: true
            },
            function () {
            });

        const unsplash = new Unsplash({
            applicationId: "*****************************",
            secret: "***********************",
            callbackUrl: "http://localhost:3000"
        });


        unsplash.search.photos( this.state.searchKey, this.state.pagination.activePage )
            .then(toJson)
            .then(response => {
                // Your code
                console.log(response);

                let _pagination = this.state.pagination;
                _pagination['totalItemsCount'] = response.total;

                this.setState({
                    images: response.results,
                    pagination : _pagination,
                    displayLoader: false
                    },
                    function () {
                    });
            });
    };


    handleSearchSplash(searchKey){
        let _pagination = this.state.pagination;
        _pagination['activePage'] = 1;

        this.setState({
                searchKey : searchKey,
                pagination: _pagination
            },
            function () {
                this.handleFetchImagesFromSplash();
            });
    }


    handlePageChange(pageNumber){
        let _pagination = this.state.pagination;
        _pagination['activePage'] = pageNumber;

        this.setState({pagination: _pagination});
        this.handleFetchImagesFromSplash();
    }

    render() {
        return (
            <div className="App">
                <Header />
                <SearchBar searchSplash={this.handleSearchSplash} />
                <Images images={this.state.images} />
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
    handleFetchImagesFromSplash:  React.PropTypes.func,
    handleSearchSplash:  React.PropTypes.func,
    handlePageChange:  React.PropTypes.func
};

export default App;


