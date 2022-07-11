import React, { useContext } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { GeolocationContext } from '../../services/GeolocationContext';
import InfoCard from '../InfoCard';
import {
  ArrowRightIcon,
  StyledButton,
  StyledForm,
  StyledHeader,
  StyledInput,
  StyledTitle,
} from './styles';
const Header = () => {
  const { getIpGeolocation } = useContext(GeolocationContext);
  const { register, handleSubmit } = useForm<{ text: string }>();
  const onSubmit: SubmitHandler<{ text: string }> = ({ text }) =>
    getIpGeolocation(text);

  return (
    <StyledHeader>
      <StyledTitle>IP Address Tracker</StyledTitle>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <StyledInput
          type="text"
          {...register('text', { required: true })}
          name="text"
          placeholder="Search for any IP address or domain"
        />
        <StyledButton type="submit">
          <ArrowRightIcon />
        </StyledButton>
      </StyledForm>
      <InfoCard />
    </StyledHeader>
  );
};

export default Header;
