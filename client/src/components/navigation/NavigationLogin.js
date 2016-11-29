import React from 'react'
import { Link } from 'react-router';

const NavigationLogin = () => {
    return (
        <nav className="navbar navbar-default">
        <div className="container-fluid">
            <div className="navbar-header">
            <Link to="/" className="navbar-brand">Kumaha Akang</Link>
            </div>

            <div className="collapse navbar-collapse">
            <ul className="nav navbar-nav navbar-right">
                <li><Link to="/login">Log In</Link></li>
                <li><Link to="/signup">Sign up</Link></li>
            </ul>
            </div>
        </div>
        </nav>
    )
}

export default NavigationLogin