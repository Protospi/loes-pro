import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
    const [message, setMessage] = useState("");

    const baseURL = 'prod' === 'prod'    
    ? '/app'  // Production URL
    : 'http://localhost:5001/app';  // Development URL

    useEffect(() => {
        axios.get(baseURL).then(response => {
            setMessage(response.data.message);
        });
    }, []);

    return <h1>{message}</h1>;
}

export default App;
