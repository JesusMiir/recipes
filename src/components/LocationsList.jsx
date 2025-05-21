function LocationsList({locations, handleLocation}) {
    return (
        <ul>
            {/* LocationsList.jsx */}
            {locations.map((location) => (
                <li key={location.id}>
                    <button onClick={() => handleLocation(location)}>{location.name}, {location.admin1}, {location.country}</button>
                </li>
            ))}
        </ul>
    )
}

export default LocationsList
