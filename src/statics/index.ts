import { HomePageTypes } from '@/types/homeTypes'

export const nfts: HomePageTypes[] = [
  {
    id: 1,
    title: 'Managing NFT',
    description: 'Stacking or Unstacking NFT',
    imageUrl: 'path/to/image1.jpg',
    routes: "/managing"
  },
  {
    id: 2,
    title: 'Mint a NFT',
    description: 'Mint new NFTs directly on the platform',
    imageUrl: 'path/to/image2.jpg',
    routes: "/mint"
  },
];