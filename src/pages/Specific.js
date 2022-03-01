import React from 'react';
import { useHistory } from 'react-router-dom';

function Specific() {
    return (
        <>
        <body>
    <h1>Specific Breakdown</h1>
    <h3>Bitcoin</h3>
    <div id="piechart" ></div>
    <div>
        <h1>Comments</h1>
        <div id="user1">
            <div id="theuser">
                <img src="../usericon.webp"></img>
                <h5>Daren1</h5>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae ipsam sit quod fugit debitis, ut pariatur sunt rem praesentium culpa quibusdam nisi soluta maxime asperiores numquam. Earum totam inventore similique.</p>
        </div>
        <div id="user1">
            <div id="theuser">
            <img src="../usericon.webp"></img>
            <h5>Harold541</h5>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae ipsam sit quod fugit debitis, ut pariatur sunt rem praesentium culpa quibusdam nisi soluta maxime asperiores numquam. Earum totam inventore similique.</p>
        </div>
        <a href="./comments.html">...Show more</a>
    </div>


    <form action="../index.html">
        <button type="submit">Back to Home</button>
    </form>
</body>
        
        </>
    )
}


export default Specific;