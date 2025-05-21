import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Forecast  from "../components/Forecast";
import LocationsList from "../components/LocationsList";

/*
    Geocoding API Documentation: https://open-meteo.com/en/docs/geocoding-api
        This API allows you to search a location, and get back a list of matches with their coordinates (latitude and longitude)
        Example URL: https://geocoding-api.open-meteo.com/v1/search?name=Berlin&count=10&language=en&format=json

    Forecast API Documentation: https://open-meteo.com/en/docs
        This API allows you to send a latitude and longitude and get weather data
        Example URL: https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&daily=temperature_2m_max,temperature_2m_min

    The user wants..
        - to be able to search a location and see a list of matches
        - select the location, then see weather data for the next 7 days
        - be able to switch between Celsius and Fahrenheit
        
        - to be able to save their home location so that it loads with the page
        - to be able to save a list of favorite locations in addition to their home location

    https://geocoding-api.open-meteo.com/v1/search?name=Berlin&count=10&language=en&format=json    
*/

function WeatherPage() {
    const { id } = useParams()
    const [inputValue, setInputValue] = useState("")
    const [locations, setLocations] = useState(null)
    const [location, setLocation] = useState(null)
    
    const [weather, setWeather] = useState(null)

    useEffect(() => {
        // If there is an id
        if (id) {
            // get fav locations from localStorage
            const favLocations = JSON.parse(localStorage.getItem("locationsArray"))
            if (!favLocations) return;
            // find the location with the matching ID
            const location = favLocations.find(location => location.id == id)
            console.log({favLocations, location})
            // load weather
            handleLocation(location)
            return
        }

        // If no id, check localStorage for home location
        const location = localStorage.getItem("ownLocation")
        if (location) {
            const auxlocation = JSON.parse(location)
            handleLocation(auxlocation)
        }
    }, []);

    const handleChange = (event) => {
        setInputValue(event.target.value);
    }

    const handleSubmit = async (event) => {
        setLocation(null)
        setWeather(null)
        event.preventDefault()
        try {
            const res = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${inputValue}&count=10&language=en&format=json`)

            if (!res.ok) {
                return
            }
    
            const data = await res.json();
            setLocations(data.results)
            // console.log(data.results)
            // Toledo
            // Toledo, ??, Spain
            // Toledo, Ohio, USA
        } catch (error) {
            console.log(error)
        }
    }

    const handleLocation = async (location) => {
        //console.log(id)
        // let location = locations.find(location => location.id === id) 
        setLocations(null)
        setLocation(location)
        try {
            const res = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${location.latitude}&longitude=${location.longitude}&daily=temperature_2m_max,temperature_2m_min`)

            if (!res.ok) {
                return
            }

            const data = await res.json();
            // console.log(data)
            setWeather(data)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <h2>Weather</h2>
            <form>
                <input id="location" value={inputValue} onChange={handleChange} type="text"/>
                <button onClick={handleSubmit}>Search</button>
            </form>
            
            {!locations && !weather ? (
                <>
                    Search for a location
                </>
            ) : locations && locations.length === 0 ? (
                <>
                    No results found
                </>
            ) : weather ? (
                <Forecast location={location} weather={weather} />
            ) : (
                <LocationsList locations={locations} handleLocation={handleLocation}/>
            )}
        </>
    )
}

export default WeatherPage;