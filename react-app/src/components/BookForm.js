import React, { Fragment } from 'react'

const BookForm = () => {
    return (
        <Fragment>
        <h1 className="title">insert book</h1>
            <form className="">
                <div className="form-group">
                    <label className='mt-2' for="formGroupExampleInput1">title</label>
                    <input type="text" className="form-control" id="formGroupExampleInput1" placeholder="" />

                    <label className='mt-2' for="formGroupExampleInput2">price</label>
                    <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="" />

                    <label className='mt-2' for="formGroupExampleInput3">description</label>
                    <textarea class="form-control" id="formGroupExampleInput3" rows="3"></textarea>

                    <button type="submit" class="btn btn-primary mt-4">submit</button>
                </div>
            </form>
        </Fragment>
    )
}

export default BookForm
