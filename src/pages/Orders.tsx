import { useState, useEffect } from "react";
import { getAllOrders } from "../utils/dbFunctions";
import WideFoodCard from "../components/WideFoodCard";

function Orders() {
    const [orders, setOrders] = useState<unknown>();

    useEffect(() => {
        const fetchOrders = async () => {
            setOrders(await getAllOrders());
        }

        fetchOrders();
    }, []);

    return (
        <div>
            <p>Upcoming Orders</p>
            {
                orders ? orders[0].past_orders.map((order) => {
                    return <WideFoodCard order={order} />
                }) : null
            }
        </div>
    )
}

export default Orders