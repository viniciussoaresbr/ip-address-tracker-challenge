import styled from 'styled-components';
import { ReactComponent as ArrowRight } from '../../assets/arrow_right.svg';

export const StyledHeader = styled.header`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 15rem;
  background-image: linear-gradient(
    to right,
    #3f37c9,
    #5f56d3,
    #7b73dc,
    #9791e3,
    #b2afe9
  );
  gap: 0.5rem;
  font: 1.2rem 'Roboto';
  z-index: 2;
`;

export const StyledTitle = styled.h1`
  font: 2rem 'Roboto';
  font-weight: 400;
  margin-top: 1.5rem;
  color: #f8f9fa;
`;
export const StyledForm = styled.form`
  display: flex;
  width: 35%;
  height: 3rem;
  @media screen and (max-width: 1024px) {
    width: 50%;
  }
  @media screen and (max-width: 768px) {
    width: 70%;
  }
  @media screen and (max-width: 425px) {
    width: 90%;
  }
`;

export const StyledInput = styled.input`
  width: calc(100% - 3rem);
  height: 3rem;
  outline: none;
  background-color: #f8f9fa;
  border-top-left-radius: 0.7rem;
  border-bottom-left-radius: 0.7rem;
  padding: 0 0.3rem;
  color: #090a0b;
`;

export const ArrowRightIcon = styled(ArrowRight)`
  width: 15px;
  height: 15px;
  fill: #f8f9fa;
`;

export const StyledButton = styled.button`
  width: 3rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #090a0b;
  border-top-right-radius: 0.7rem;
  border-bottom-right-radius: 0.7rem;
  font: 1.2rem 'Roboto';
  font-weight: 300;
  color: #f8f9fa;
  cursor: pointer;
`;
