import React, { useCallback, useState } from 'react'
import { GoogleMap, LoadScript, Marker, useJsApiLoader } from '@react-google-maps/api'

const containerStyle = {
  width: '100%',
  height: '400px',
}

const center = {
  lat: -3.745,
  lng: -38.523,
}

interface LocationMapProps {
  onSelectLocation?: (location: { lat: number; lng: number }) => void
  onUpdateAddress?: (address: string) => void // New prop for updating the address
}

const LocationMap: React.FC<LocationMapProps> = ({ onSelectLocation, onUpdateAddress }) => {
  const [markerPosition, setMarkerPosition] = useState(center)

  //   const onMapClick = useCallback((event: any) => {
  //     const lat = event.latLng.lat();
  //     const lng = event.latLng.lng();
  //     setMarkerPosition({ lat, lng });
  //     onSelectLocation({ lat, lng });

  //     // Geocode to get address from coordinates
  //     fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`)
  //       .then(response => response.json())
  //       .then(data => {
  //         if (data.results && data.results.length > 0) {
  //             const address = data.results[0].formatted_address;
  //             console.log("Fetched Address:", address);
  //           onUpdateAddress(address);
  //         }
  //       });
  //   }, [onSelectLocation, onUpdateAddress]);
  const onMapClick = useCallback(
    (event: any) => {
      const lat = event.latLng.lat()
      const lng = event.latLng.lng()
      setMarkerPosition({ lat, lng })
      onSelectLocation && onSelectLocation({ lat, lng })

      // Geocode to get address from coordinates
      fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`)
        .then((response) => response.json())
        .then((data) => {
          console.log('Geocoding API Response:', data) // Log the entire response from the API
          if (data.results && data.results.length > 0) {
            const address = data.results[0].formatted_address // Get the formatted address
            console.log('Fetched Address:', address) // Log the fetched address
            onUpdateAddress && onUpdateAddress(address) // Update the address in the form
          } else {
            console.log('No results found for the given coordinates.')
          }
        })
        .catch((error) => {
          console.error('Error fetching address:', error)
        })
    },
    [onSelectLocation, onUpdateAddress]
  )

  return (
    <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY || ''}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10} onClick={onMapClick}>
        <Marker position={markerPosition} />
      </GoogleMap>
    </LoadScript>
  )
}

export default LocationMap
