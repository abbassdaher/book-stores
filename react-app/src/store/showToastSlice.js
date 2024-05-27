import { createSlice } from "@reduxjs/toolkit";

const showToastSlice = createSlice({
    name: "showToast",
    initialState: {
        isShowToast: 'false'
    },
    reducers: {
        showToast: (state, action) => {
            state.isShowToast = !state.isShowToast
            console.log(state.isShowToast);
        }
    }
})
export const { showToast } = showToastSlice.actions
export default showToastSlice.reducer