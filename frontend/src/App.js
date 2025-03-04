import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
    const [message, setMessage] = useState("");

    useEffect(() => {
        axios.get("/api").then(response => {
            setMessage(response.data.message);
        });
    }, []);

    return <h1>{message}</h1>;
}

export default App;
