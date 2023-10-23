import DumbNFTMarketPlace from '@/components/Home/DumbNFTMarketPlace'
import useCustomRouter from '@/re-usible/router'

function NFTHomePage() {

    const router = useCustomRouter()
    const manageRoutes = (key: string) => router.navigate(key)

    return <DumbNFTMarketPlace manageRoutes={manageRoutes}/>
}

export default NFTHomePage;