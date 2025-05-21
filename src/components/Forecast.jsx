import { useState } from "react"

function Forecast({ location, weather }) {
    const [unit, setUnit] = useState(localStorage.getItem('jesús-unit') || 'Celsius')
    
    // (0°C × 9/5) + 32 = 32°F

    function changeUnit() {
        let newUnit = unit === 'Celsius' ? 'Fahrenheit' : 'Celsius';
        localStorage.setItem('jesús-unit', newUnit)
        setUnit(newUnit)
    }

    function saveLocation() {
        const existing = JSON.parse(localStorage.getItem("locationsArray")) || [];

        const alreadyExists = existing.some(item => item.id === location.id);

        if (!alreadyExists) {
            existing.push(location);
            localStorage.setItem("locationsArray", JSON.stringify(existing));
            console.log("Location added.");
        } else {
            console.log("Location already exists.");
        }
    }

    function saveOwnLocation() {
        localStorage.setItem("ownLocation", JSON.stringify(location));
    }

    function applyUnit(value) {
        if (unit === 'Celsius') {
            return value.toFixed(2) + "C"
        } else {
            return (value * 9/5 + 32 ).toFixed(2) + "F"
        }
    }

    return (
        <>
            {/* Forecast.jsx */}
            <h2 style={{marginTop: '20px', marginBottom: '50px'}}>
                {location.name}
            </h2>
            <button onClick={ changeUnit }>
                Change unit
            </button>
            &nbsp;
            <button onClick={ saveLocation }>
                Add to favorites
            </button>
            &nbsp;
            <button onClick={ saveOwnLocation }>
                Set as your location
            </button>
            <br/><br />
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '1rem' }}>
                {weather.daily.time.map((date, index) => (
                    <div
                        key={date}
                        style={{
                            border: '1px solid #ccc',
                            borderRadius: '8px',
                            padding: '1rem',
                            textAlign: 'center',
                            backgroundColor: '#f9f9f9',
                        }}
                    >
                        <h4 style={{ marginBottom: '0.5rem' }}>
                            {new Date(date).toLocaleDateString('en-GB', { weekday: 'short', day: 'numeric', month: 'short' })}
                        </h4>
                        <p>🌡️ Max: { applyUnit( weather.daily.temperature_2m_max[index]) } </p>
                        <p>❄️ Min: { applyUnit(weather.daily.temperature_2m_min[index]) }</p>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Forecast
