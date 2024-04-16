import { configureStore } from '@reduxjs/toolkit'
import bookSlice from './bookSlice'


const store = configureStore({
    reducer: { 
        Book: bookSlice ,
    },
})

export default store