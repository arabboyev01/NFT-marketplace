import { nfts } from '@/statics'
import { HomePageTypes, HomeRoutes } from '@/types/homeTypes'
import React from 'react'
import {
    CardWrapper,
    Header,
    NFTCard,
    NFTDescription,
    NFTTitle,
    Title,
    Wrapper
} from '@/components/Home/style.NFTHomePage'

const DumbNFTMarketPlace: React.FC<HomeRoutes> = ({manageRoutes}) => (
    <Wrapper>
        <Header>
            <Title>NFT Marketplace</Title>
        </Header>
        <CardWrapper>
            {nfts.map((nft: HomePageTypes) => (
                <NFTCard key={nft.id} onClick={() => manageRoutes(nft.routes)}>
                    <NFTTitle>{nft.title}</NFTTitle>
                    <NFTDescription>{nft.description}</NFTDescription>
                </NFTCard>
            ))}
        </CardWrapper>
    </Wrapper>
)

export default DumbNFTMarketPlace