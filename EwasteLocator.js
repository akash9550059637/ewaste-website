import React, { useEffect } from 'react';
import L from 'leaflet'; // Import the Leaflet library
import 'leaflet/dist/leaflet.css'; // Import Leaflet CSS

function EwasteLocator() {
    useEffect(() => {
        // Initialize the map
        const map = L.map('map').setView([51.505, -0.09], 13); // Initial coordinates and zoom level

        // Add a map tile layer (you can replace this with your preferred map provider)
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        }).addTo(map);

        // Example: Add a marker for a recycling facility
        const facilityMarker = L.marker([51.505, -0.09]).addTo(map); // Facility coordinates
        facilityMarker.bindPopup('<b>E-Waste Recycling Facility</b><br>This is a sample facility.'); // Popup content

        // You can add more markers and customize them based on your data
        // Use real e-waste facility data and integrate it with your backend API

        // Cleanup when the component unmounts
        return () => {
            map.remove(); // Remove the map to avoid memory leaks
        };
    }, []);

    return (
        <section className="ewaste-locator space">
            <h2>E-Waste Collection Locator</h2>
            <div id="map" style={{ height: '400px' }}></div>
            {/* You can add search functionality and more features here */}
        </section>
    );
}

export default EwasteLocator;
