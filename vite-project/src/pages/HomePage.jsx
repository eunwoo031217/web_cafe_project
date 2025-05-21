import React, { useEffect, useState } from "react";
import MenuItem from '../components/MenuItem';
import CustomizerModal from '../components/CustomizerModal';
import Roulette from '../components/Roulette';

function HomePage({ cart, setCart }) {
    const API_KEY_URL = import.meta.env.VITE_COFFEE_API_URL;
    const [menu, setMenu] = useState([]);
    const [selectedItem, setSelectedItem] = useState(null);

    const fetchMenuData = async () => {
        const response = await fetch(API_KEY_URL);
        if (!response.ok) {
            throw new Error("Failed to fetch menu");
        }
        return await response.json();
    };

    useEffect(() => {
        fetchMenuData()
            .then(data => {
                const formatted = data.map(item => ({
                    id: item.id,
                    name: item.title,
                    basePrice: 3500,
                    image: item.image,
                }));
                setMenu(formatted);
            })
            .catch(error => {
                console.error("API 호출 오류: ", error);
            });
    }, []);

    const addToCart = (customizedItem) => {
        setCart([...cart, { ...customizedItem, quantity: 1 }]);
        setSelectedItem(null);
    };

    return (
        <div>
            <h1 style={{ textAlign: "center", marginTop: "30px" }}>Menu</h1>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Roulette menu={menu} onSelect={(item) => setSelectedItem(item)} />
            </div>
            <div style={{
                display: 'flex',
                flexWrap: "wrap",
                justifyContent: "center",
                gap: '20px',
                padding: "20px 0"
            }}>
                {menu.map(item => (
                    <MenuItem key={item.id} item={item} onClick={() => setSelectedItem(item)} />
                ))}
            </div>

            {selectedItem && (
                <CustomizerModal
                    item={selectedItem}
                    onClose={() => setSelectedItem(null)}
                    onAdd={addToCart}
                />
            )}
        </div>
    )
}

export default HomePage;