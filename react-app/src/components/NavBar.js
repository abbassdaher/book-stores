import { React, Fragment } from 'react'

const NavBar = () => {
    return (
        <Fragment>
            <nav className="navbar fixed-top navbar-dark bg-dark  ">
                <a className="navbar-brand" href="#!">my books</a>
                <button type="button" className="btn btn-outline-primary">login</button>
            </nav>
            </Fragment>
            
    )
}

export default NavBar