import { nfts } from '@/statics'
import {
    Wrapper,
    Header,
    NFTCard,
    NFTImage,
    NFTTitle,
    NFTDescription,
    Title,
    CardWrapper
} from '@/components/Home/style.NFTHomePage'
import { HomePageTypes } from '@/types/homeTypes'

function NFTHomePage() {
  return (
    <Wrapper>
      <Header>
        <Title>NFT Marketplace</Title>
      </Header>
      <CardWrapper>
        {nfts.map((nft: HomePageTypes) => (
          <NFTCard key={nft.id}>
            <NFTImage src={nft.imageUrl} alt={nft.title} />
            <NFTTitle>{nft.title}</NFTTitle>
            <NFTDescription>{nft.description}</NFTDescription>
          </NFTCard>
        ))}
      </CardWrapper>
    </Wrapper>
  );
}

export default NFTHomePage;