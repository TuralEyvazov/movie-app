import MovieCard from "../MovieCard/MovieCard.jsx";
import {useEffect, useState} from "react";

const MovieList = ({movies,search,status}) => {

    const [data,setData] = useState(movies);


    useEffect(() => {
        if(search && search.length > 0) {
            setData(search);
        }else{
            setData(movies);
        }
        console.log(status)
    },[search,movies]);

    return (
        <div>
            <div className="row gap-row-14 py-20">
                {
                    status === "idle"?
                    data && data.map((movie) => (
                        <MovieCard movie={movie}  key={movie.id} />
                    )):<h1>Loading...</h1>
                }
            </div>
        </div>
    );
};

export default MovieList;