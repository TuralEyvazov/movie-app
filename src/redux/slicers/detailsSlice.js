import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import {API_KEY, API_URL} from "../../constants/api.js";

const initialState = {
    details: {},
}

export const getDetails = createAsyncThunk('getDetails', async (id) => {
    const response = await axios.get(`${API_URL}/${id}?api_key=${API_KEY}`);
    return response.data;
})

export const detailsSlice = createSlice({
    name: "details",
    initialState,
    reducers: {},
    extraReducers: (builder)=>{
        builder.addCase(getDetails.fulfilled,(state,action)=>{
            state.details = action.payload;
        })
    }
})

export const {} = detailsSlice.actions

export default detailsSlice.reducer