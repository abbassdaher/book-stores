import { React, Fragment } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { login } from '../store/authSlice';


const NavBar = () => {
    const dispatch = useDispatch();
    const { error } = useSelector((state) => state.Book);
    const { isLogedIn } = useSelector((state) => state.auth)

    return (
        <Fragment>
            {error && <div className="alert alert-danger mt-5">{error}</div>}
            <nav className="navbar fixed-top navbar-dark bg-dark  ">
                <a className="navbar-brand" href="#!">my books</a>
                <button type="button" className="btn btn-outline-primary" onClick={() => dispatch(login())} >
                    {isLogedIn ? 'log out' : 'log in'}
                </button>
            </nav>

        </Fragment>

    )
}

export default NavBar