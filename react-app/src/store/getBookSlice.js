import { createSlice } from "@reduxjs/toolkit";

const getbookSlicer = createSlice({
    name: "getbook",
    initialState: { getbookID: null },
    reducers: {
        getbookID: (state,actions) => {
            state.getbookID = actions.payload;
        }
    }
})

export const { getbookID } = getbookSlicer.actions;

export default getbookSlicer.reducer;