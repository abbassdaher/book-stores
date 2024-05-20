import React, { Fragment, useCallback, useState } from 'react'
import { useSelector } from 'react-redux';

const ToastComponent = () => {
    const [enable, setEnable] = useState();
    const { showToast } = useSelector((state) => state.showToast)
    // const isEnabled = (showToast == "true" ? "visible" : "none")
    console.log("rerender");
    // setEnable((prev) => {
    //     const display = (showToast === "true" ? "visible" : "none")
    //     console.log(display);
    // }
    // )

    console.log(showToast, enable);
    return (
        <div className="toast fade show bg-danger" role="alert"
            aria-live="assertive" aria-atomic="true" style={{ display: "none" }}>

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
