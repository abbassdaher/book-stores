import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// First, create the thunk
export const getBooks = createAsyncThunk(
    'book/getBooks',
    async (_, thunkAPI) => {
        try {
            const response = await fetch("http://localhost:3005/books")
            const data = await response.json()
            return data
        } catch (err) {
            console.log(err);
        }

    },
)

const bookSlice = createSlice({
    name: "book",
    initialState: { book: null },
    reducers: {}
    ,
    extraReducers: builder => {
        builder.addCase(getBooks.pending, (state, action) => { console.log(action); })
        builder.addCase(getBooks.fulfilled, (state, action) => { console.log(action); })
        builder.addCase(getBooks.rejected, (state, action) => { console.log(action); })
    }


})
export default bookSlice.reducer