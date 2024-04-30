import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isLogedIn: false,
        name: 'abbass daher'
    },
    reducers: {
        login: (state) => {
            state.isLogedIn =!state.isLogedIn;
        }
        
    }
})

export const { login } = authSlice.actions;
export default authSlice.reducer