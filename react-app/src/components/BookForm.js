import React, { Fragment, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { insertBook } from '../store/bookSlice';


const BookForm = () => {
    const dispatch = useDispatch();

    const title = useRef(null)
    const price = useRef(null)
    const description = useRef(null)

    const handleSubmit = (e) => {
        e.preventDefault();
        const newBook = {
            title: title.current.value,
            price: price.current.value,
            description: description.current.value
        }
        dispatch(insertBook(newBook))

        title.current.value = null;
        price.current.value = null;
        description.current.value = null;
    }
    return (
        <Fragment>
            <h1 className="title">insert book</h1>
            <form onSubmit={handleSubmit} className="">
                <div className="form-group">
                    <label className='mt-2' htmlFor="formGroupExampleInput1">title</label>
                    <input ref={title} type="text" className="form-control" id="formGroupExampleInput1" placeholder="" />

                    <label className='mt-2' htmlFor="formGroupExampleInput2">price</label>
                    <input ref={price} type="text" className="form-control" id="formGroupExampleInput2" placeholder="" />

                    <label className='mt-2' htmlFor="formGroupExampleInput3">description</label>
                    <textarea ref={description} className="form-control" id="formGroupExampleInput3" rows="3"></textarea>

                    <button type="submit" className="btn btn-primary mt-4">submit</button>
                </div>
            </form>
        </Fragment>
    )
}

export default BookForm
