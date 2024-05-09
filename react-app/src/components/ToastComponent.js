import React, { Fragment } from 'react'
import { useSelector } from 'react-redux';

const ToastComponent = () => {
    const { showToast } = useSelector((state) => state.showToast)
    const isEnabled = (showToast == "true" ? "visible" : "none")
    console.log(showToast, `'${isEnabled}'`);
    return (
        <div className="toast fade show bg-danger" role="alert"
            aria-live="assertive" aria-atomic="true" style={{display:`'${isEnabled}'`}}>

            <div className="toast-header">
                <strong className="mr-auto alert-">Deleted Book</strong>

            </div>
            <div className="toast-body">
                Hello, world! This is a toast message.
            </div>
        </div>
    )
}

export default ToastComponent
