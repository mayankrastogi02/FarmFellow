import React from 'react'

const WideFoodCard = (order) => {
    const { items, order_date, pickup_date, pickup_location, vendor } = order.order

    console.log(order.order)

    let itemsString;

    for (let item of items) {
        itemsString = item.name
    }

    return (
        <div className='flex flex-wrap items-center px-12 gap-4'>
            <div className="card lg:card-side p-0 shadow-xl h-48">
                <figure className='w-1/4'><img src={items[0].image} alt="Album" /></figure>
                <div className="card-body">
                    <p className="text-2xl text-left">{vendor} Pickup</p>
                    <div className='flex'>
                        {items.map((item) => {
                            return <p>{item.name}</p>
                        })}
                    </div>
                    <p className="text-left">{items[0].price}</p>
                </div>
            </div>
        </div>
    )
}

export default WideFoodCard