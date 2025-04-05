import Header from "./components/Header/Header.jsx";
import Home from "./pages/Home/Home.jsx";
import {Route, Routes} from "react-router-dom";
import MovieDetails from "./pages/MoveDetails/MovieDetails.jsx";
import {useState} from "react";

const App = () => {
    const [inputValue, setInputValue] = useState("");
    return (
        <div className="app container bg-secondary">
            <Header inputValue={inputValue} setInputValue={setInputValue} />
            <Routes>
                <Route path="/" element={<Home inputValue={inputValue}/>} />
                <Route path="/details/:id" element={<MovieDetails/>} />
            </Routes>
        </div>
    );
};

export default App;