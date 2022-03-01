import React from 'react';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';


function Homepage({settheRequest}) {
    const history = useHistory();
    const [coin, setCoin] = useState("");
  
    let coin_to_get_data = {
        method : "POST",
        body : JSON.stringify({"title" : coin}),
        headers : {'Content-Type': 'application/json'}
    }
      const submit = async () => {
        const response = await fetch('/image', coin_to_get_data)
        history.push('/general')

    }
    
    return (
        <>
        
       <body>
    <h1>Welcome</h1>
    <div>
        <select value={coin} onChange={e => setCoin(e.target.value)}>
            <option>Please choose a coin</option>
            <option key="Bitcoin" value="Bitcoin">Bitcoin</option>
            <option key="Etherium" value="Etherium">ETH</option>
            <option key="XLM" value="XLM">XLM</option>
        </select>
    </div>
        <button type="submit" onClick={submit}>Find Crypto Image</button>
    </body>
        </>
    )
}


export default Homepage;

