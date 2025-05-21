import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function FavoriteLocation() {
    const [locations, setLocations] = useState([]);

    useEffect(() => {
        const stored = JSON.parse(localStorage.getItem("locationsArray")) || [];
        setLocations(stored);
    }, []);

    /*
    function removeLocation(id) {
        const existing = JSON.parse(localStorage.getItem("locationsArray")) || [];
      
        const updated = existing.filter(location => location.id !== id);
      
        if (updated.length === existing.length) {
          console.log("Location not found.");
        } else {
          localStorage.setItem("locationsArray", JSON.stringify(updated));
          console.log("Location removed.");
        }
    }
    */
    
    

    const removeLocation = (id) => {
        const updated = locations.filter(location => location.id !== id);
        setLocations(updated);
        localStorage.setItem("locationsArray", JSON.stringify(updated));
    };

    if (locations.length === 0) {
        return <p>No locations saved.</p>;
    }

    return (
        <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
            <h1>Locations List</h1>
            {locations.map(location => (
                
                <div
                    key={location.id}
                    style={{
                        border: "1px solid #ccc",
                        padding: "12px",
                        marginBottom: "10px",
                        borderRadius: "8px"
                    }}
                >
                    <div style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center"
                    }}>
                        <strong style={{ fontSize: "18px", marginBottom: "10px"}}>{location.name}</strong>
                        <Link to={`/weather/${location.id}`}>
                            Weather
                        </Link>
                        <button
                            onClick={() => removeLocation(location.id)}
                            style={{
                                backgroundColor: "#e74c3c",
                                color: "white",
                                border: "none",
                                padding: "6px 12px",
                                borderRadius: "4px",
                                cursor: "pointer"
                            }}
                        >
                            Delete
                        </button>
                    </div>
                    <p><strong>Country:</strong> {location.country}</p>
                    <p><strong>Admin1:</strong> {location.admin1}</p>
                    <p><strong>Population:</strong> {location.population}</p>
                </div>
            ))}
        </div>
    );
}

export default FavoriteLocation;
