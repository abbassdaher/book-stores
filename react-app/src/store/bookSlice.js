import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// First, create the thunk
const fetchUserById = createAsyncThunk(
    'book/getBooks',
    async (_, thunkAPI) => {
        const response = await fetch("http://localhost:3005/books")
        const data = await response.json()
        return data
    },
)

const bookSlice = createSlice({
    name: "book",
    initialState: { book: null },
    reducers: {
        addBook(state) {
            state.value += 1;
            console.log(state.value);
        }
    }
})
export default bookSlice.reducer