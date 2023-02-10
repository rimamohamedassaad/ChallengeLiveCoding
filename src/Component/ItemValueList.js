import React, { useState } from 'react';

const ListWithPrices = () => {

    const [items, setItems] = useState([
        { name: 'Tomatoes', price:  5.0 },
        { name: 'Basil', price: 2.5 },
        { name: 'Mozzarella', price: 9.99 },
    ]);

    const [newItem, setNewItem] = useState({ name: '', price: 0 });

    const handleSubmit = (event) => {
        event.preventDefault();
        setItems([...items, newItem]);
        setNewItem({ name: '', price: 0 });
    };

    const handleChange = (event) => {
        setNewItem({ ...newItem, [event.target.name]: event.target.value });
    };

    const handleRemove = (index) => {
        setItems(items.filter((_, i) => i !== index));
    };

    return (
        <div >
            <form onSubmit={handleSubmit} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '40px'}}>
                <input
                    type="text"
                    name="name"
                    value={newItem.name}
                    onChange={handleChange}
                />
                <input
                    type="number"
                    name="price"
                    value={newItem.price}
                    onChange={handleChange}
                />
                <button type="submit">Add Item</button>
            </form>
            <table style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '40px', borderCollapse: 'separate', borderSpacing: '30px' }}>
                <tbody>
                    {items.map((item, index) => (
                        <tr key={index}>
                            <td>{item.name}</td>
                            <td>{item.price}</td>
                            <td>
                                <button onClick={() => handleRemove(index)}>Remove</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ListWithPrices;
