import styled from 'styled-components';

export const Wrapper = styled.div`
  font-family: Arial, sans-serif;
  text-align: center;
  background-color: #121212;
  padding: 20px;
`;

export const Header = styled.header`
  background-color: #2c3e50;
  color: #ecf0f1;
  padding: 20px;
`;

export const Title = styled.h1`
  font-size: 36px;
`;
export const  CardWrapper = styled.div`
  display: flex;
  align-items: center;
  max-width: 700px;
  margin: 0 auto;
`
export const NFTCard = styled.div`
  background-color: #8f8f8f;
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  margin: 20px;
  padding: 20px;
  display: inline-block;
  max-width: 300px;
  width: 100%;
  height: 130px;
`;

export const NFTImage = styled.img`
  max-width: 100%;
  height: auto;
`;

export const NFTTitle = styled.h2`
  font-size: 24px;
`;

export const NFTDescription = styled.p`
  font-size: 16px;
`;