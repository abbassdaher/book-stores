import { React, Fragment } from 'react'

const NavBar = () => {
    return (
        <Fragment>
            <navbar className="navbar fixed-top navbar-dark bg-dark  ">
                <a class="navbar-brand" href="#!">my books</a>
                <button type="button" class="btn btn-outline-primary">login</button>
            </navbar></Fragment>
    )
}

export default NavBar