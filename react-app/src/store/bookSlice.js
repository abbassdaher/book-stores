import { createSlice } from "@reduxjs/toolkit";


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