import React, { Fragment } from 'react'

const BookList = () => {
  return (
    <Fragment>
    <div className="bookList w-100">
    <h3 className="title">book list</h3>

    <div className="border p-2 d-flex  w-100 justify-content-between">
      <div className="">cras justo odio</div>
      <div className="btnGroup">
        <button type="button" class="btn btn-primary btn-sm  border-0 rounded-0">Read</button>
        <button type="button" class="btn btn-danger btn-sm border-0 rounded-0">Delete</button>
      </div>
    </div>

  </div> 
    </Fragment>
  )
}

export default BookList
