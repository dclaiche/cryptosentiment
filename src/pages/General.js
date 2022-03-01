import React from 'react';
import { useHistory } from 'react-router-dom';
import {useState, useEffect} from 'react';

function General(){

    return (
        <>
            <body>
    <h1>General Results</h1>
    <a href="./specific.html">Bitcoin Specifics</a>
    <p>ETH specifics</p>
    <p>XML specifics</p>
    <form action="../">
        <button type="submit">Back to Home</button>
    </form>
</body>
        </>
    )
}




export default General;