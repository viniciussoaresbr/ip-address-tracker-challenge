import styled from 'styled-components';

export const InfoCardContainer = styled.section`
  position: absolute;
  top: 10rem;
  display: flex;
  align-items: center;
  width: 70%;
  height: 8rem;
  background-color: #f8f9fa;
  border-radius: 0.7rem;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  @media screen and (max-width: 900px) {
    width: 85%;
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
    width: 12rem;
    height: calc(100% + 10rem);
  }
`;

interface InfoCardProps {
  border: number;
}

export const InfoCardBoard = styled.div<InfoCardProps>`
  width: 25%;
  height: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  border-right: ${({ border }) => border !== 3 && '1px solid #ced4da;'};
  @media screen and (max-width: 768px) {
    width: 80%;
    height: 25%;
    border-right: none;
    border-bottom: ${({ border }) => border !== 3 && '1px solid #ced4da;'};
  }
`;

export const InfoCardLabel = styled.label`
  font: 1rem 'Roboto';
  color: #adb5bd;
`;

export const InfoCardText = styled.p`
  color: #090a0b;
  font: 1.3rem 'Roboto';
`;
