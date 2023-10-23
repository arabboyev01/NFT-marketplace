import {
  Container,
  H1,
  Divider,
  NFTBoxGrid,
  NFTBox,
  TokenGrid,
  TokenItem,
  TokenLabel,
  TokenValue
} from './stacking.style';
import type { FC } from "react";
import { ConnectWallet, ThirdwebNftMedia, Web3Button } from "@thirdweb-dev/react";
import { BigNumber, ethers } from "ethers";
import NFTCard from '@/components/NFTCart'
import { StackPropsTypes } from '@/types/homeTypes'

const DumbStackingComponent: FC<StackPropsTypes> = ({address, claimableRewards, tokenBalance, stakingContractAddress, stakedTokens, ownedNfts, stakeNft}) => (
      <Container >
      <H1>Stake Your NFTs</H1>
      <Divider />

      {!address ? (
        <ConnectWallet />
      ) : (
        <>
          <h2>Your Tokens</h2>
          <TokenGrid>
            <TokenItem>
              <TokenLabel>Claimable Rewards</TokenLabel>
              <TokenValue>
                <b>
                  {!claimableRewards ? "Loading..." : ethers.utils.formatUnits(claimableRewards, 18)}
                </b>{" "}
                {tokenBalance?.symbol}
              </TokenValue>
            </TokenItem>
            <TokenItem>
              <TokenLabel>Current Balance</TokenLabel>
              <TokenValue>
                <b>{tokenBalance?.displayValue}</b> {tokenBalance?.symbol}
              </TokenValue>
            </TokenItem>
          </TokenGrid>

          <Web3Button action={(contract) => contract.call("claimRewards")} contractAddress={stakingContractAddress}>
            Claim Rewards
          </Web3Button>

          <Divider  />
          <h2>Your Staked NFTs</h2>
          <NFTBoxGrid>
            {stakedTokens && stakedTokens[0]?.map((stakedToken: BigNumber) => (
                <NFTCard tokenId={stakedToken.toNumber()} key={stakedToken.toString()}/>
              ))}
          </NFTBoxGrid>

          <Divider />
          <h2>Your Unstaked NFTs</h2>
          <NFTBoxGrid>
            {ownedNfts?.map((nft: any) => (
              <NFTBox key={nft.metadata.id.toString()}>
                <ThirdwebNftMedia metadata={nft.metadata}/>
                <h3>{nft.metadata.name}</h3>
                <Web3Button contractAddress={stakingContractAddress} action={() => stakeNft(nft.metadata.id)}>
                  Stake
                </Web3Button>
              </NFTBox>
            ))}
          </NFTBoxGrid>
        </>
      )}
    </Container>
)

export default DumbStackingComponent