import React, { useContext, useEffect, useRef } from 'react';
import { MapContainer, Marker, TileLayer } from 'react-leaflet';
import { GeolocationContext } from '../../services/GeolocationContext';
import { StyledMain } from './styles';
import Lottie from 'react-lottie';
import animationData from '../../assets/ellipsis_animation.json';
import { Map } from 'leaflet';

const Main = () => {
  const { geolocationData } = useContext(GeolocationContext);

  const mapRef = useRef<Map>(null);
  useEffect(() => {
    handleFlyTo();
  }, [geolocationData]);

  const handleFlyTo = () => {
    mapRef.current?.flyTo(
      [geolocationData.location.lat, geolocationData.location.lng],
      13,
      { duration: 2 },
    );
  };

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  if (!geolocationData.location) {
    return <Lottie options={defaultOptions} height={300} width={300} />;
  }

  return (
    <StyledMain>
      <MapContainer
        ref={mapRef}
        center={[geolocationData.location.lat, geolocationData.location.lng]}
        zoom={13}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker
          position={[
            geolocationData.location.lat,
            geolocationData.location.lng,
          ]}
        ></Marker>
      </MapContainer>
    </StyledMain>
  );
};

export default Main;
