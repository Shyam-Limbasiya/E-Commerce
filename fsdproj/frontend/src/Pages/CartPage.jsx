import React, { useEffect, useState } from 'react';
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import axios from "axios";
import { Data } from "./data";

const CartPage = () => {
    const [user, setUser] = useState(null);
    const [items, setItems] = useState([]);
    const [filteredItems, setFilteredItems] = useState([]);

    const fetchdata = () => {
        const email = localStorage.getItem("email");
        if (email) {
            axios.get(`http://localhost:8080/api/users?email=${email}`)
                .then(response => {
                    setUser(response.data);
                    axios.post('http://localhost:8080/api/fetchItems', response.data)
                        .then(response => {
                            setItems(response.data);
                        })
                        .catch(error => {
                            console.error('Error while fetching the items:', error);
                        });
                })
                .catch(error => {
                    console.error('Error fetching user:', error);
                });
        }
    }

    useEffect(() => {
        fetchdata();
    }, []);

    useEffect(() => {
        const filtered = items.filter(item => Data.some(dataItem => dataItem.id === item.id));
        setFilteredItems(filtered);
    }, [items]);


    return (
        <>
            <Header/>
            <div>
                <h2>Hello</h2>
                {filteredItems.map(item => (
                    <div key={item.id}>
                        {console.log(item)} {/* Add this line */}
                        <img src={Data.find(dataItem => dataItem.id === item.id)?.imageUrl} alt={item.name} />
                        <p>{item.name} - {item.price}</p>
                    </div>
                ))}

            </div>
            <Footer/>
        </>
    );
};

export default CartPage;
