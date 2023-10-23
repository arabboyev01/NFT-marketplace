import { BigNumber } from 'ethers';

export interface HomePageTypes {
    id: number,
    title: string,
    description: string,
    imageUrl: string,
    routes: string
}

export interface HomeRoutes {
    manageRoutes: (key: string) => void
}

export interface NFTCardProps {
    tokenId: number;
}

interface BalanceValues {
    _hex: string
    _isBigNumber: boolean
}

interface TokenBalanceType {
    decimals: number
    displayValue: string
    name: string
    symbol: string
    value: BalanceValues
}

export interface StackPropsTypes {
    address: string|undefined
    claimableRewards: BigNumber|undefined
    tokenBalance: TokenBalanceType|undefined
    stakingContractAddress: string
    stakedTokens: any
    ownedNfts: any
    stakeNft: (id: string) => void
}