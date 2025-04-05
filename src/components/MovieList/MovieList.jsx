import MovieCard from "../MovieCard/MovieCard.jsx";
import {useEffect, useState} from "react";

const MovieList = ({movies,search}) => {

    const [data,setData] = useState(movies);

    useEffect(() => {
        if(search && search.length > 0) {
            setData(search);
        }else{
            setData(movies);
        }
    },[search,movies]);

    return (
        <div>
            <div className="row gap-row-14 py-20">
                {
                    data && data.map((movie) => (
                        <MovieCard movie={movie}  key={movie.id} />
                    ))
                }
            </div>
        </div>
    );
};

export default MovieList;