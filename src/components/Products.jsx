import { useState } from "react";

function ListOfProducts() {
    const products = [
        { name: 'Mela', price: 0.5 },
        { name: 'Pane', price: 1.2 },
        { name: 'Latte', price: 1.0 },
        { name: 'Pasta', price: 0.7 },
    ];
    const [totale, setTotale] = useState(0);
    const [addedProducts, setAddedProducts] = useState([]);

    function addToCart(product) {
        const existingProduct = addedProducts.find(p => p.name === product.name);
        if (existingProduct) {
            setAddedProducts(addedProducts.map(p =>
                p.name === product.name ? { ...p, quantity: p.quantity + 1 } : p
            ));
        } else {
            setAddedProducts([...addedProducts, { ...product, quantity: 1 }]);
        }
        setTotale(totale + product.price);
    }

    function removeFromCart(product) {
        const existingProduct = addedProducts.find(p => p.name === product.name);
        if (existingProduct.quantity > 1) {
            setAddedProducts(addedProducts.map(p =>
                p.name === product.name ? { ...p, quantity: p.quantity - 1 } : p
            ));
        } else {
            setAddedProducts(addedProducts.filter(p => p.name !== product.name));
        }
        setTotale(totale - product.price);
    }

    return (
        <>
            <h3>
                Carrello = {addedProducts.reduce((acc, product) => acc + product.quantity, 0)}
            </h3>
            <h1>Lista Prodotti</h1>
            <div>
                <ul>
                    {products.map((product, index) => (
                        <li key={index}>
                            {product.name} - {product.price} €
                            <button onClick={() => addToCart(product)}>Aggiungi al carrello</button>
                        </li>
                    ))}
                </ul>
                <h1>Prodotti nel Carrello</h1>
                <ul>
                    {addedProducts.map((product, index) => (
                        <li key={index}>
                            {product.name} - {product.price} € x {product.quantity}
                            <button onClick={() => removeFromCart(product)}>Rimuovi Prodotto</button>
                        </li>
                    ))}
                </ul>
                <h3>Totale da Pagare = {totale}€ </h3>
            </div>
        </>
    )
}

export default ListOfProducts;