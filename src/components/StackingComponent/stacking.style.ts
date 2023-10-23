import styled from 'styled-components';

const Container = styled.div`
  margin-top: 96px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  position: absolute;
  padding: 0 24px;
`;

const H1 = styled.h1`
  margin-bottom: 0;
`;

const Explain = styled.p`
  font-size: 1.125rem;
  max-width: 1200px;
`;

const Divider = styled.div`
  width: 50%;
  border-color: grey;
  opacity: 0.25;
`;

const SmallDivider = styled.div`
  width: 25%;
  border-color: grey;
  margin-top: 64px;
  opacity: 0.25;
`;

const NFTBoxGrid = styled.div`
  width: 1200px;
  max-width: 95vw;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 2%;
  margin-top: 28px;
  flex-wrap: wrap;
`;

const NFTBox = styled.div`
  border-radius: 16px;
  border: 1px solid #ccc;
  width: 19%;
  min-height: 200px;
  padding: 16px;
`;

const OptionSelectBox = styled.div`
  border-radius: 16px;
  border: 1px solid #ccc;
  width: 48%;
  min-height: 200px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-left: 12px;
  padding-right: 12px;
  cursor: pointer;
`;

const SelectBoxTitle = styled.h2`
  font-size: 1.75rem;
  margin-top: 8px;
  margin-bottom: 8px;
`;

const SelectBoxDescription = styled.p`
  color: rgba(255, 255, 255, 0.9);
  margin-top: 0;
`;

const TokenGrid = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 1%;
  width: 1600px;
  max-width: 95vw;
  flex-wrap: wrap;
  margin: 16px 0;
`;

const TokenItem = styled.div`
  width: 35%;
  height: 120px;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(255, 255, 255, 0.4);
  gap: 16px;
`;

const TokenLabel = styled.h3`
  margin-top: 0;
  margin-bottom: 0;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.7);
`;

const TokenValue = styled.p`
  font-size: 1.3rem;
  margin-top: 8px;
  margin-bottom: 0;
  font-weight: 500;
`;

const SpacerTop = styled.div`
  margin-top: 16px;
`;

const BigSpacerTop = styled.div`
  margin-top: 32px;
`;

const SpacerBottom = styled.div`
  margin-bottom: 16px;
`;

const DetailPageHr = styled.hr`
  margin-top: 0;
  margin-bottom: 32px;
`;

const NFTMedia = styled.img`
  width: 100%;
  max-height: 300px;
  border-radius: 15px;
`;

export {
  Container,
  H1,
  Explain,
  Divider,
  SmallDivider,
  NFTBoxGrid,
  NFTBox,
  OptionSelectBox,
  SelectBoxTitle,
  SelectBoxDescription,
  TokenGrid,
  TokenItem,
  TokenLabel,
  TokenValue,
  SpacerTop,
  BigSpacerTop,
  SpacerBottom,
  DetailPageHr,
  NFTMedia,
};
