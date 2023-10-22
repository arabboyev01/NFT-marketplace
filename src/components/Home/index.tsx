import DumbNFTMarketPlace from '@/components/Home/DumbNFTMarketPlace'
import { useRouter } from 'next/router'

function NFTHomePage() {

    const router = useRouter()
    const manageRoutes = (key: string) => router.push(key)

  return <DumbNFTMarketPlace manageRoutes={manageRoutes} />
}

export default NFTHomePage;