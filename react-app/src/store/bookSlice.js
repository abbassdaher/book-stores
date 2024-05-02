import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// First, create the thunk
export const getBooks = createAsyncThunk(
    'book/getBooks',
    async (_, thunkAPI) => {
        const { rejectWithValue } = thunkAPI
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
export const insertBook = createAsyncThunk('book/insertBook', async (bookData, thunkAPI) => {
    const { rejectWithValue, getState } = thunkAPI
    try {
        // console.log(getState().auth.name);
        bookData.id = JSON.stringify(getState().Book.counter)
        bookData.userName = getState().auth.name
         console.log(bookData);
        const response = await fetch("http://localhost:3005/books", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=UTF-8'
            },
            body: JSON.stringify(bookData)

        })
        const data = await response.json();
        return data

    } catch (error) {
        return rejectWithValue(error.message)
    }
})

export const deleteBook = createAsyncThunk('book/deleteBook',
    async (id, thunkAPI) => {
        const { rejectWithValue } = thunkAPI
        try {
            const response = await fetch(`http://localhost:3005/books/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json; charset=UTF-8'
                }
            })
            const data = await response.json();
            return data;

        } catch (error) {
            return rejectWithValue(error.message)

        }

    })

// part1
// ----------------------------------------------------------------
//getBooks: {pendings,fulfilled,rejected}
//getBooks -> createasyncThunk -> 3 types of actions
//pending createAction('book/getBooks/pending',(payload) =>{return payload})
//fulfilled createAction('book/getBooks/fulfilled',(payload) =>{return payload})
//rejected createAction('book/getBooks/rejected',(payload) =>{return payload})

const bookSlice = createSlice({
    name: "book",
    initialState: { book: null, isLoading: false, error: null, counter: null },
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
            state.counter = action.payload.length
            console.log(state.counter);
        })
        builder.addCase(getBooks.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
            console.log(action);
        })

        builder.addCase(insertBook.pending, (state, action) => {
            state.isLoading = true;
            state.error = null;
            console.log(action);
        })
        builder.addCase(insertBook.fulfilled, (state, action) => {
            state.isLoading = false;
            state.error = null;
            state.book.push(action.payload);
            state.counter = state.counter + 1
            console.log(state.counter);
        })
        builder.addCase(insertBook.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
            console.log(action);
        })
        builder.addCase(deleteBook.pending, (state, action) => {
            state.isLoading = true;
            state.error = null;
            console.log(action);
        })
        builder.addCase(deleteBook.fulfilled, (state, action) => {
            state.isLoading = false;
            state.error = null;
            state.book = state.book.filter(book => book.id !== action.payload.id)
            console.log(state.book);
        })
        builder.addCase(deleteBook.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
            console.log(action);
        })
    }


})
export default bookSlice.reducer