import {useEffect, useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import './header.scss'
import {useDispatch, useSelector} from "react-redux";
import {getSearch} from "../../redux/slicers/searchSlice.js";


const Header = ({inputValue,setInputValue}) => {

    const navigate = useNavigate();
    const handleChange = (e) => {
        setInputValue(e.target.value);
        navigate('/')
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }


    return (
        <div className='header px-30 py-20 family bg-primary'>
            <div className="row item-center gap-row-10">
                <div className="col-lg-4 col-md-4 col-sm-7 col-xs-9">
                    <Link to={'/'}>
                        <h1 className='fs-28 family-primary'>Movie Site</h1>
                    </Link>
                </div>
                <div className="col-lg-7 col-md-6 col-sm-5 col-xs-3">
                    <div className="search w-100 d-flex justify-end item-center">
                        <form className='hidden-md show w-70' onSubmit={(e) => handleSubmit(e)}>
                            <input type="text" value={inputValue} name="search" placeholder="Search Movie Site" onChange={handleChange} />
                        </form>
                    </div>
                </div>
                <div className='col-md-12 col-sm-12 col-xs-12'>
                    <form className='hidden show-md' onSubmit={(e) => handleSubmit(e)}>
                        <input type="text" name="search" value={inputValue} placeholder="Search Movie Site" onChange={handleChange} />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Header;