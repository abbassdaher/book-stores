import { isAllOf } from '@reduxjs/toolkit'
import React, { Fragment } from 'react'
import { useSelector } from 'react-redux'

const BookList = ({ isLoading, books }) => {
  const counter = useSelector((state) => state.counter )
  const { isLogedIn } = useSelector((state) => state.auth)
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
                    <button type="button" className="btn btn-primary btn-sm  border-0 rounded-0" disabled={!isLogedIn}>Read</button>
                    <button type="button" className="btn btn-danger btn-sm border-0 rounded-0" disabled={!isLogedIn}>Delete</button>
                  </div>
                </div>)))
              :('there is no books available !')
            )}
      </div>
    </Fragment>

  )
}




export default BookList
