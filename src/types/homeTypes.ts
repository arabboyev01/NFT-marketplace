export interface HomePageTypes {
    id: number,
    title: string,
    description: string,
    imageUrl: string,
    routes: string
}

export interface HomeRoutes {
    manageRoutes: (key: string) => Promise<boolean>
}