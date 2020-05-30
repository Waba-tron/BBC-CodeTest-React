import React from 'react'
import {Link} from 'react-router-dom';
export default function Nav() {

    const navStyle = {
        color: 'white'
    }
    return (
        <div>
            <nav>
             
                <ul className="nav-links">
                    <Link style={navStyle} to="/">
                    <li>Home</li>
                    </Link>
                    <Link style={navStyle} to="/random">
                    <li>Random Article</li>
                    </Link>
                    <Link style={navStyle} to="/Ranking">
                    <li>Rank Articles</li>
                    </Link>
                   
                </ul>
            </nav>
        </div>
    )
}
