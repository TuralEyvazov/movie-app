import React, {useEffect} from 'react';
import './movie_details.scss'
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getDetails} from "../../redux/slicers/detailsSlice.js";

const MovieDetails = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const {details} = useSelector((store)=>store.details);
    useEffect(() => {
        dispatch(getDetails(id));
    },[id,dispatch]);

    console.log(details);

    const bgImage = {
        backgroundImage:`url(https://image.tmdb.org/t/p/w500${details.backdrop_path})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top center",
        backgroundSize: "cover",
        minHeight: "100vh",
        width: "100%",
    }

    const runtime = `${Math.floor(details.runtime/60)}h ${details.runtime%60}m`

    return (
        <div className='movie-details family-primary' style={bgImage}>
            <div className="container py-50">
               <div className="row gap-row-20">
                   <div className="col-lg-6 col-md-7 col-sm-8 col-xs-12 d-flex item-center flex-column">
                       <div className="card-img w-80 overflow-h rounded-2">
                           <img src={`https://image.tmdb.org/t/p/w500${details.poster_path}`} alt=""/>
                           <span className='reyting'>{details.vote_average} <i className="fa-solid fa-star"></i></span>
                       </div>
                       <ul className="card-title w-80 mt-20 p-10">
                           <li>
                               <b>Name: </b>
                               <span>{details.title}</span>
                           </li>
                           <li>
                               <b>Description: </b>
                               <span>{details.overview}</span>
                           </li>
                           <li>
                               <b>Release: </b>
                               <span>{details.release_date}</span>
                           </li>
                           <li>
                               <b>Runtime: </b>
                               <span>{runtime}</span>
                           </li>
                       </ul>
                   </div>
               </div>
            </div>
        </div>
    );
};

export default MovieDetails;