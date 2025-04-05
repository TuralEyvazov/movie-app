import React, {useEffect, useState} from 'react';
import MovieList from "../../components/MovieList/MovieList.jsx";
import {useDispatch, useSelector} from "react-redux";
import {getMovies} from "../../redux/slicers/discoverSlice.js";
import {getSearch} from "../../redux/slicers/searchSlice.js";

const Home = ({inputValue}) => {
    const dispatch = useDispatch();
    const {movies,status} = useSelector((store) => store.discover);
    const {search} = useSelector((store) => store.search);

    useEffect(() => {
        dispatch(getMovies());
        dispatch(getSearch(inputValue));
    },[inputValue])

    return (
        <div className='home'>
            <MovieList movies={movies} search={search} status={status}/>
        </div>
    );
};

export default Home;