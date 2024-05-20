import React, { Fragment } from 'react'

const BookDetails = ({bookInfo}) => {
  return (
    <Fragment>
    <div className="bookDetails w-100">
    <h3 className="title">book details</h3>
    <div className="w-100 bg-body-secondary">
    {bookInfo ? bookInfo.description:"there is no post selected yet. please slelect!"}
    
    </div>
  </div>
    </Fragment>
  )
}

export default BookDetails
