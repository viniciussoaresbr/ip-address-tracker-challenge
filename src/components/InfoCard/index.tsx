import React, { useContext } from 'react';
import { GeolocationContext } from '../../services/GeolocationContext';
import {
  InfoCardBoard,
  InfoCardContainer,
  InfoCardLabel,
  InfoCardText,
} from './styles';
const InfoCard = () => {
  const { geolocationData } = useContext(GeolocationContext);
  if (!geolocationData.location) {
    return <InfoCardContainer></InfoCardContainer>;
  }

  const infoCardData = [
    {
      label: 'IP ADDRESS',
      info: geolocationData.ip,
    },
    {
      label: 'LOCATION',
      info: `${geolocationData.location.city}, ${geolocationData.location.country}`,
      geoName: geolocationData.location.geonameId,
    },
    {
      label: 'TIMEZONE',
      info: geolocationData.location.timezone,
    },
    { label: 'ISP', info: geolocationData.isp },
  ];

  return (
    <InfoCardContainer>
      {infoCardData.map((data, i) => {
        return (
          <InfoCardBoard key={i} border={i}>
            <InfoCardLabel>{data.label}</InfoCardLabel>
            <InfoCardText>{data.info}</InfoCardText>
            <InfoCardText>{data?.geoName}</InfoCardText>
          </InfoCardBoard>
        );
      })}
    </InfoCardContainer>
  );
};

export default InfoCard;
