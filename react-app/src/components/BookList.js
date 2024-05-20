import { isAllOf } from '@reduxjs/toolkit'
import React, { Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteBook, getBook } from '../store/bookSlice'
import { showToast } from '../store/showToastSlice'
import {getbookID } from '../store/getBookSlice'

const BookList = ({ isLoading, books }) => {
  const { showToast } = useSelector((state) => state.showToast)
  const dispatch = useDispatch()
  const counter = useSelector((state) => state.counter)
  const { isLogedIn } = useSelector((state) => state.auth)
  // console.log(showToast);

  return (

    <Fragment>
      <div className="bookList w-100">
        <div></div>
        <h3 className="title">book list</h3>
        {
          isLoading ? ('Loading...') :
            (books ?
              (books.map((book) => (
                <div className="border p-2 d-flex  w-100 justify-content-between" key={book.id}>
                  <div className=""> {book.title}</div>
                  <div className="btnGroup">

                  
                    <button type="button"
                      className="btn btn-primary btn-sm  border-0 rounded-0"
                      disabled={!isLogedIn}
                      onClick={
                        ()=>dispatch(getBook(book.id))
                      }>Read</button>


                    <button type="button" className="btn btn-danger btn-sm border-0 rounded-0" disabled={!isLogedIn} onClick={
                      () => {
                        dispatch(deleteBook(book.id)).unwrap()
                          .then((originalPromiseResult) => {

                            // handle result here

                            console.log(originalPromiseResult);
                          })
                          .catch((rejectedValueOrSerializedError) => {
                            // handle error here
                            console.log(rejectedValueOrSerializedError);
                          });

                        console.log(book.id)
                      }
                    }>Delete</button>
                  </div>
                </div>)))
              : ('there is no books available !')
            )}
      </div>
    </Fragment>

  )
}




export default BookList
