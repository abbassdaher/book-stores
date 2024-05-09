import { createSlice } from "@reduxjs/toolkit";

const showToastSlice = createSlice({
    name: "showToast",
    initialState: { showToast: "false" },
    reducers: {
        showToast: (state,action) => {
            state.showToast = "true"
            console.log(state);
        }
    }
})
export const {showToast} = showToastSlice.actions
export default showToastSlice.reducer