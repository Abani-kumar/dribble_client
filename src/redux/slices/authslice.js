import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    accessToken:null,
    refreshToken:localStorage.getItem("refreshToken") ? localStorage.getItem("refreshToken") :null ,
    user:localStorage.getItem("dribbbleuser") ?JSON.parse(localStorage.getItem("dribbbleuser")) : null,
    step:1,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setAccessToken: (state, action) => {
            state.accessToken = action.payload;
        },
        setRemoveAccessToken: (state,action) => {
            state.accessToken = null;
        },
        setRefreshToken: (state,action)=>{
            state.refreshToken=action.payload;
            localStorage.setItem("refreshToken",JSON.stringify(action.payload))
        },
        setRemoveRefreshToken: (state,action) => {
            state.refreshToken = null;
            localStorage.removeItem("refreshToken");
        },
        setUser:(state,action)=>{
            state.user=action.payload;
            localStorage.setItem("dribbbleuser",JSON.stringify(action.payload));
        },
        setRemoveUser:(state,action)=>{
            state.user=null;
            localStorage.removeItem("dribbbleuser")
        },
        setStep:(state,action)=>{
            state.step=action.payload;
        }
    },
});

export const { setAccessToken , setRemoveAccessToken,setRefreshToken,setRemoveRefreshToken,setUser,setRemoveUser,setStep } = authSlice.actions;
export default authSlice.reducer;
