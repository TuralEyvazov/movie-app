import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import {API_KEY, API_URL} from "../../constants/api.js";

const initialState = {
    movies: [],
}

export const getMovies = createAsyncThunk('getMovies', async (genre) => {
    const response = await axios.get(`${API_URL}/now_playing?api_key=${API_KEY}`);
    return response.data.results;
})

export const discoverSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {},
    extraReducers: (builder)=>{
        builder.addCase(getMovies.fulfilled,(state,action)=>{
            state.movies = action.payload;
        })
    }
})

export const {} = discoverSlice.actions

export default discoverSlice.reducer