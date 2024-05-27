import React, { Fragment, useCallback, useState } from 'react'
import { useSelector } from 'react-redux';
import { showToast } from '../store/showToastSlice';




const ToastComponent = () => {
    const { isShowToast } = useSelector((state) => state.showToast)
    const [enableToast, setEnableToast] = useState('none');
    console.log("re-render");
    console.log(isShowToast);
    const toastDivStyle = document.getElementsByClassName('toast')

    const toastDiv = () => {
        // console.log("isShowToast in toastDiv:",isShowToast);
        const display = (isShowToast === true ? "visible" : "none")
        console.log("display in toastDiv:",display);
        

        // (setEnableToast((prev) =>   "visible"  ))
        // setEnableToast(prev =>{
        //     return {display};
        // })
        return display
    }
    const styles = {
        exampleStyle: {
            display: toastDiv()
        }
      };
    console.log("div  style: ",styles.exampleStyle);
    // console.log("state: " + enableToast);
    // const displayStr = toastDiv()
    // console.log(displayStr);
    // setEnableToast(displayStr)

    // console.log(enableToast);
    return (
        <div className="toast fade show bg-danger toast" role="alert"
            aria-live="assertive" aria-atomic="true" style={styles.exampleStyle}>
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
