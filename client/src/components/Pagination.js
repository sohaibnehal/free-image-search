
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Pagination from 'react-js-pagination';

class PaginationControl extends Component
{
    constructor(props)
    {
        super(props);
        this.handlePageChange = this.handlePageChange.bind(this);
    }

    handlePageChange(pageNumber) {
        this.props.changePage(pageNumber);
    }

    render()
    {
        return (
        <div className='text-center'>
            <Pagination
                activePage={this.props.controls.activePage}
                itemsCountPerPage={this.props.controls.itemsCountPerPage}
                totalItemsCount={this.props.controls.totalItemsCount}
                pageRangeDisplayed={this.props.controls.pageRangeDisplayed}
                onChange={this.handlePageChange}
            />
        </div>
        );
    }
}

//Expected type of property
PaginationControl.propTypes = {
    handlePageChange:  PropTypes.func
};

export default PaginationControl;