type FarmerType = {
    id: string,
    created_at: string,
    name: string,
    email: string,
    category: string,
    profile_picture: string,
    products: string,
    location: string,
}

type ProductType = {
    name: string,
    price: string,
    description: string,
}

export type { FarmerType, ProductType };