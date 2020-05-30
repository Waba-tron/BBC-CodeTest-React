import React from 'react'
import {Link} from 'react-router-dom';
export default function Home() {
    return (
        <div>
            <h1>Please click on the following Articles</h1>
            <Link to="/article/2">
                <h1>Article 2</h1>
            </Link>
            <Link  to="/article/3">
                <h1>Article 3</h1>
            </Link>
            <Link to="/article/5">
                <h1>Article 5</h1>
            </Link>
        </div>
    )
}
