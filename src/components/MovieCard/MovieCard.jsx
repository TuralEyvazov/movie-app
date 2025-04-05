import React from 'react';
import './movieCard.scss'
import {Link} from "react-router-dom";

const MovieCard = ({movie}) => {

    const {poster_path, title, id, vote_average} = movie;
    return (
        <div className="col-lg-3 col-md-4 col-sm-6 col-xs-6 movie-card">
            <div className="card family-primary">
                <div className="card-img">
                    <Link to={`/details/${id}`}>
                        <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt=""/>
                    </Link>
                    <div className='star'>
                        <span>{vote_average.toFixed(1)}</span>
                        <i className="fa-solid fa-star"></i>
                    </div>
                </div>
                <div className="card-title d-flex justify-between">
                    <h2 className='fs-16 px-10'>{title}</h2>
                </div>
            </div>
        </div>
    );
};

export default MovieCard;