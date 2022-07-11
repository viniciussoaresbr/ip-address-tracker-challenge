import request from 'axios';
import React, { createContext, ReactNode, useState } from 'react';
import { toast } from 'react-toastify';
import { api, apiKey } from '../api';

export interface GeolocationInterface {
  ip: string;
  location: {
    country: string;
    region: string;
    city: string;
    lat: number;
    lng: number;
    postalCode: string;
    timezone: string;
    geonameId: number;
  };
  as: {
    asn: number;
    name: string;
    route: string;
    domain: string;
    type: string;
  };
  isp: string;
}

interface GeolocationContextInterface {
  getIpGeolocation: (parameter?: string) => void;
  geolocationData: GeolocationInterface;
}

export const GeolocationContext = createContext(
  {} as GeolocationContextInterface,
);

const GeolocationProvider = ({ children }: { children: ReactNode }) => {
  const [geolocationData, setGeolocationData] = useState(
    {} as GeolocationInterface,
  );
  const getIpGeolocation = async (parameter: string = '') => {
    const DomainPattern = new RegExp(
      '^((?!-)[A-Za-z0-9-]' + '{1,63}(?<!-)\\.)' + '+[A-Za-z]{2,6}',
    );
    const isDomain = DomainPattern.test(parameter);

    try {
      const { data } = await api.get(
        `country,city?apiKey=${apiKey}&${
          isDomain ? 'domain' : 'ipAddress'
        }=${parameter}`,
      );
      setGeolocationData(data);
    } catch (error) {
      if (request.isAxiosError(error) && error.response) {
        if (error.response.data) {
          toast.error((error.response?.data as { messages: string }).messages);
        }
      }
    }
  };

  return (
    <GeolocationContext.Provider value={{ getIpGeolocation, geolocationData }}>
      {children}
    </GeolocationContext.Provider>
  );
};

export default GeolocationProvider;
