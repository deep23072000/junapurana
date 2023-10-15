import React, { useState, useEffect } from 'react';
import axios from 'axios';

const LocationComponent = () => {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [address, setAddress] = useState(null);

  useEffect(() => {
    // Use the geolocation package to get the device's coordinates
    navigator.geolocation.getCurrentPosition(async (position) => {
      const lat = position.coords.latitude;
      const lng = position.coords.longitude;
      setLatitude(lat);
      setLongitude(lng);

      // Make a reverse geocoding request to Google Maps API
      try {
        const apiKey = 'YOUR_GOOGLE_MAPS_API_KEY';
        const response = await axios.get(
          `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${apiKey}`
        );

        if (response.data.results.length > 0) {
          setAddress(response.data.results[0].formatted_address);
        } else {
          setAddress('Address not found');
        }
      } catch (error) {
        console.error('Error getting address:', error);
      }
    });
  }, []);

  return (
    <div>
      <h2>Your Location:</h2>
      {latitude && longitude ? (
        <div>
          <p>
            Latitude: {latitude}, Longitude: {longitude}
          </p>
          <p>Address: {address || 'Loading...'}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default LocationComponent;
