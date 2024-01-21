type FarmerType = {
    id: string,
    created_at: string,
    name: string,
    email: string,
    category: string,
    profile_picture: string,
    products: string,
    location: string,
    banner_image: string,
}

type ProductType = {
    name: string,
    price: string,
    description: string,
    image: string,
}

export type { FarmerType, ProductType };