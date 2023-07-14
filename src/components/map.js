import React from "react";
import { useNavigate } from "react-router-dom";

const Map = () => {
    const navigate = useNavigate()
    return (
        <div>
        <h1>Orinnica</h1>
        <span onClick={() => navigate(`characterList`)}> Characters</span>
        </div>
    )
};

export default Map;