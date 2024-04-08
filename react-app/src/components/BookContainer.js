import React, { Fragment } from 'react'
import BookDetails from './BookDetails'
import BookList from './BookList'

export const BookContainer = () => {
    return (
        <Fragment>
            <div className="postContainer container d-flex justify-content-center ">
                <BookList />
                <div className="vr mx-2" style={{ height: "200px" }}></div>
                <BookDetails />
            </div>
        </Fragment>
    )
}
