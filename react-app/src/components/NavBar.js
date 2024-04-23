import { React, Fragment } from 'react'
import { useSelector } from "react-redux";


const NavBar = () => {
    const  {error}  = useSelector((state) => state.Book);
    return (
        <Fragment>
            {error && <div className="alert alert-danger mt-5">{error}</div>}
            <nav className="navbar fixed-top navbar-dark bg-dark  ">
                <a className="navbar-brand" href="#!">my books</a>
                <button type="button" className="btn btn-outline-primary">login</button>
            </nav>
        </Fragment>

    )
}

export default NavBar