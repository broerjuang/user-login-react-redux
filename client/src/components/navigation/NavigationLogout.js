import React from 'react'
import { Link } from 'react-router';

const NavigationLogout = () => {
    return (
        <nav className="navbar navbar-default">
        <div className="container-fluid">
            <div className="navbar-header">
            <Link to="/" className="navbar-brand">CMS</Link>
            </div>

            <div className="collapse navbar-collapse">
            <ul className="nav navbar-nav navbar-right">
                <li><Link to="/dashboard">dashboard</Link></li>
                <li><Link to="/logout">Log out</Link></li>
            </ul>
            </div>
        </div>
        </nav>
    )
}

export default NavigationLogout