import React, { useContext, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import Header from '../../components/Header';
import Main from '../../components/Main';
import { GeolocationContext } from '../../services/GeolocationContext';
import { StyledHomeContainer } from './styles';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
  const { getIpGeolocation } = useContext(GeolocationContext);

  useEffect(() => {
    getIpGeolocation();
  }, []);

  return (
    <StyledHomeContainer>
      <Header />
      <Main />
      <ToastContainer position="top-right" autoClose={5000} limit={1} />
    </StyledHomeContainer>
  );
};

export default Home;
