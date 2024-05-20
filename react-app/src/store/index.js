import { configureStore } from '@reduxjs/toolkit'
import bookSlice from './bookSlice'
import authSlice from './authSlice'
import showToastSlice from './showToastSlice'
import getBookSlice from './getBookSlice'


const store = configureStore({
    reducer: {
        Book: bookSlice,
        auth: authSlice,
        showToast: showToastSlice,
        getBook: getBookSlice,
    },
})

export default store