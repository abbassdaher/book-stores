import React, { Fragment } from 'react'

const BookList = ({ isLoading, books }) => {
  return (

    <Fragment>
      <div className="bookList w-100">
        <h3 className="title">book list</h3>
        {
          isLoading ? ('Loading...') :
            (books ? (
              books.map((book) => (
                <div className="border p-2 d-flex  w-100 justify-content-between">
                  <div className=""> {book.title}</div>
                  <div className="btnGroup">
                    <button type="button" className="btn btn-primary btn-sm  border-0 rounded-0">Read</button>
                    <button type="button" className="btn btn-danger btn-sm border-0 rounded-0">Delete</button>
                  </div>
                </div>
              ))
            ) : null)}
      </div>
    </Fragment>

  )
}




export default BookList
