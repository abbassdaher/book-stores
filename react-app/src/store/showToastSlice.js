import { createSlice } from "@reduxjs/toolkit";

const showToastSlice = createSlice({
    name: "showToast",
    initialState: { showToast: false },
    reducers: {
        showToast: (state) => {
            state.showToast =!state.showToast;
        }
    }
})
export const {showToast} = showToastSlice.actions
export default showToastSlice.reducer