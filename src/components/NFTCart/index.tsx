import { ThirdwebNftMedia, useContract, useNFT, Web3Button } from "@thirdweb-dev/react"
import type { FC } from "react"
import { nftDropContractAddress, stakingContractAddress } from "../consts"
import React from 'react'
import { NFTBox } from '@/components/StackingComponent/stacking.style'
import { NFTCardProps } from '@/types/homeTypes'

const NFTCard: FC<NFTCardProps> = ({ tokenId }) => {
  const { contract } = useContract(nftDropContractAddress, "nft-drop")
  const { data: nft } = useNFT(contract, tokenId)

  return (
    <React.Fragment>
      {nft && (
        <NFTBox>
          {nft.metadata && (
            <ThirdwebNftMedia metadata={nft.metadata} />
          )}
          <h3>{nft.metadata.name}</h3>
          <Web3Button
            action={(contract) => contract?.call("withdraw", [[nft.metadata.id]])}
            contractAddress={stakingContractAddress}
          >
            Withdraw
          </Web3Button>
        </NFTBox>
      )}
    </React.Fragment>
  );
};
export default NFTCard;