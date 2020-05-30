import React, { useState } from "react";

import axios from 'axios';

function Rank () {

    const [highestRank, setHighestRank] = useState("");
    const [middleRank, setMiddleRank] = useState("");
    const [lowestRank, setLowestRank] = useState("");

    const [displayHighestRank, setDisplayHighestRank] = useState("");
    const [displayMiddleRank, setDisplayMiddleRank] = useState("");
    const [displayLowestRank, setDisplayLowestRank] = useState("");

    function highRankF(event) {
       
        setHighestRank(event.target.value);
    }

    function middleRankF(event) {
     
        setMiddleRank(event.target.value);
    }

    function lowestRankF(event) {
     
        setLowestRank(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        setDisplayHighestRank(highestRank);
        setDisplayMiddleRank(middleRank);
        setDisplayLowestRank(lowestRank);
    }

    
    return (
        <div>
            <h1>Rank Page</h1>
            <p>Please choose article <strong>2</strong>, <strong>3</strong> and <strong>5</strong> to place in a ranking</p>
            <form onSubmit={handleSubmit}>
                <input type="number" placeholder="Highest Rank"name="highestRank" onChange={highRankF}/>
                <input type="number" placeholder="Middle Rank"name="middleRank" onChange={middleRankF}/>
                <input type="number" placeholder="Lowest Rank"name="lowestRank" onChange={lowestRankF}/>
                
                <button type="submit">Submit Rank</button>
            </form>        
            <section>
            <h1>Article {displayHighestRank} has the highest rank</h1>
            <h1>Article {displayMiddleRank} has the second highest rank</h1>
            <h1>Article {displayLowestRank} has the lowest rank</h1>
            </section>
            
        </div>
    )
    
 
}

export default Rank;
