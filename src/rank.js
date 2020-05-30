import React, { useState } from "react";

import axios from 'axios';

function Rank () {

    //Set hooks to hold ranking inputs from the user
    const [highestRank, setHighestRank] = useState("");
    const [middleRank, setMiddleRank] = useState("");
    const [lowestRank, setLowestRank] = useState("");

     //Set hooks to display ranking inputs from the user
    const [displayHighestRank, setDisplayHighestRank] = useState("");
    const [displayMiddleRank, setDisplayMiddleRank] = useState("");
    const [displayLowestRank, setDisplayLowestRank] = useState("");

    //Funtion to collect input from highest ranked article
    function highRankF(event) {
       
        setHighestRank(event.target.value);
    }

    //Funtion to collect input from second ranked article
    function middleRankF(event) {
     
        setMiddleRank(event.target.value);
    }

    //Funtion to collect input from thrid ranked article
    function lowestRankF(event) {
     
        setLowestRank(event.target.value);
    }

    //Once user clicks submit, set and display the articles in ranked order
    function handleSubmit(event) {
        event.preventDefault();
        setDisplayHighestRank(highestRank);
        setDisplayMiddleRank(middleRank);
        setDisplayLowestRank(lowestRank);
    }

    //Display users highest to lowest ranked articles
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
