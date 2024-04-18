import React, { Fragment, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import BookDetails from './BookDetails'
import BookList from './BookList'
import { getBooks } from '../store/bookSlice';

export const BookContainer = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getBooks())
    }, [dispatch]);
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
