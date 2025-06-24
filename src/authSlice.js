import { createSlice } from "@reduxjs/toolkit"


// Başlangıç değerler
const initialState = {
    isAuthenticated: false,
    user: null,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => { //Eğer login olmuşsa
            state.isAuthenticated = true;
            state.user = action.payload;
        }, //end login
        logout: (state) => {
            state.isAuthenticated = false;
            state.user = null;
        }, //end logout
    }, //end reducers
}); //end authSlice



// Export
export const {login, logout}= authSlice.actions;
export default authSlice.reducer;