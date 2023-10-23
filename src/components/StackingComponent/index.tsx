import DumbStackingComponent from '@/components/StackingComponent/DumbStackingComponent'
import { useAddress, useContract, useContractRead, useOwnedNFTs, useTokenBalance } from '@thirdweb-dev/react';
import { BigNumber } from 'ethers';
import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { nftDropContractAddress, stakingContractAddress, tokenContractAddress } from '../consts';

const StackingComponent: NextPage = () => {

    const address = useAddress();
    const {contract: nftDropContract} = useContract(
        nftDropContractAddress,
        'nft-drop'
    );
    const {contract: tokenContract} = useContract(
        tokenContractAddress,
        'token'
    );
    const {contract, isLoading} = useContract(stakingContractAddress)
    const {data: ownedNfts} = useOwnedNFTs(nftDropContract, address)
    const {data: tokenBalance} = useTokenBalance(tokenContract, address)
    const [claimableRewards, setClaimableRewards] = useState<BigNumber>()
    const {data: stakedTokens} = useContractRead(contract, 'getStakeInfo', [
        address,
    ]);

    useEffect(() => {
        if (!contract || !address) return
        async function loadClaimableRewards() {
            const stakeInfo = await contract?.call('getStakeInfo', [address]);
            setClaimableRewards(stakeInfo[1]);
        }

        loadClaimableRewards().then(data => console.log(data))
            .catch(err => console.log(err))
    }, [address, contract]);

    async function stakeNft(id: string) {
        if (!address) return

        const isApproved = await nftDropContract?.isApproved(
            address,
            stakingContractAddress
        );
        if (!isApproved) {
            await nftDropContract?.setApprovalForAll(stakingContractAddress, true);
        }
        await contract?.call('stake', [[id]]);
    }

    if (isLoading) {
        return <div>Loading...</div>
    }

    return <DumbStackingComponent
        address={address}
        claimableRewards={claimableRewards}
        tokenBalance={tokenBalance}
        stakingContractAddress={stakingContractAddress}
        stakedTokens={stakedTokens}
        ownedNfts={ownedNfts}
        stakeNft={stakeNft}
    />
}

// client Id  = 1c6360a3bd4314324564e8405eef5624
// secret key = BK1NEwLrLgeX89_IsiUUWFN71bQpLXylXI4Wm6uGtUbQcbx92bUjhfHRKsHmXBUIrrdleE7UdedpIt4BpIVjWw
export default StackingComponent