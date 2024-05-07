import { configureStore } from '@reduxjs/toolkit'
import bookSlice from './bookSlice'
import authSlice from './authSlice'
import showToastSlice from './showToastSlice'


const store = configureStore({
    reducer: { 
        Book: bookSlice ,
        auth: authSlice ,
        showToast: showToastSlice
    },
})

export default store