import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import {API_SEARCH_URL, API_KEY} from "../../constants/api.js";

const initialState = {
    search: [],
}

export const getSearch = createAsyncThunk('getSearch', async (searchTerm) => {
    const response = await axios.get(`${API_SEARCH_URL}?api_key=${API_KEY}&query=${searchTerm}`);
    return response.data.results;
})

export const searchSlice = createSlice({
    name: "search",
    initialState,
    reducers: {},
    extraReducers: (builder)=>{
        builder.addCase(getSearch.fulfilled,(state,action)=>{
            state.search = action.payload;
        })
    }
})

export const {} = searchSlice.actions

export default searchSlice.reducer