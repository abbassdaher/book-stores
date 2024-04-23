import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// First, create the thunk
export const getBooks = createAsyncThunk(
    'book/getBooks',
    async (_, thunkAPI) => {
        const {rejectWithValue} = thunkAPI
        // part 2
        // ----------------------------------------------------------------
        // dispatch({type: 'book/getBooks/pending',payload: undefined})
        try {
            const response = await fetch("http://localhost:3005/books")
            const data = await response.json()
            return data
            // dispatch({type: 'book/getBooks/fulfilled',payload: data})

        } catch (err) {
            return rejectWithValue(err.message);
            // dispatch({type: 'book/getBooks/rejected',payload: error})

        }

    },
)
// part1
// ----------------------------------------------------------------
//getBooks: {pendings,fulfilled,rejected}
//getBooks -> createasyncThunk -> 3 types of actions
//pending createAction('book/getBooks/pending',(payload) =>{return payload})
//fulfilled createAction('book/getBooks/fulfilled',(payload) =>{return payload})
//rejected createAction('book/getBooks/rejected',(payload) =>{return payload})

const bookSlice = createSlice({
    name: "book",
    initialState: { book: null, isLoading: false, error: null,},
    reducers: {}
    ,
    extraReducers: builder => {
        builder.addCase(getBooks.pending, (state, action) => {
            state.isLoading = true;
            state.error = null;
            console.log(action);
        })
        builder.addCase(getBooks.fulfilled, (state, action) => {
            state.isLoading = false;
            state.error = null;
            state.book = action.payload;
            console.log(action);
        })
        builder.addCase(getBooks.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
            console.log(action);
        })
    }


})
export default bookSlice.reducer