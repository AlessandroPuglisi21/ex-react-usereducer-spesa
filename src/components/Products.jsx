import { useState } from "react";

function ListOfProducts() {
    const products = [
        { name: 'Mela', price: 0.5 },
        { name: 'Pane', price: 1.2 },
        { name: 'Latte', price: 1.0 },
        { name: 'Pasta', price: 0.7 },
    ];

    const [addedProducts, setAddedProducts] = useState([]);

    const [carrello, setCarrello] = useState(0);

    function addToCart(product) {
        if (!addedProducts.some(p => p.name === product.name)) {
            setAddedProducts([...addedProducts, product]);
            setCarrello(carrello + 1);
        }
    }

    return (
        <>
            <h3>
                Carrello = {carrello}
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
                            {product.name} - {product.price} €
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default ListOfProducts;
