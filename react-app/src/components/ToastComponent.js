import React, { Fragment } from 'react'

const ToastComponent = ({ isEnable }) => {
    console.log(isEnable);
    return (
        <div className="toast fade show bg-danger" role="alert"
            aria-live="assertive" aria-atomic="true" style={{display:isEnable}}>

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
