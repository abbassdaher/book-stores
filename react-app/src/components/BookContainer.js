import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import BookDetails from './BookDetails'
import BookList from './BookList'
import bookSlice, { getBooks } from '../store/bookSlice';
import { getbookID } from '../store/getBookSlice';

export const BookContainer = () => {
    const dispatch = useDispatch();
    const { isLoading } = useSelector((state) => state.Book)
    const { book } = useSelector((state) => state.Book)
    const  {bookInfo}  = useSelector((state) => state.Book)
    useEffect(() => {
        dispatch(getBooks())
    }, [dispatch]);

    return (
        <Fragment>
            <div className="postContainer container d-flex justify-content-center ">
                <BookList isLoading={isLoading} books={book} />
                <div className="vr mx-2" style={{ height: "200px" }}></div>
                <BookDetails bookInfo= {bookInfo} />
            </div>
        </Fragment>
    )
}
