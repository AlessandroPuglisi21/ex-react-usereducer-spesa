function ListOfProducts() {
    const products = [
        { name: 'Mela', price: 0.5 },
        { name: 'Pane', price: 1.2 },
        { name: 'Latte', price: 1.0 },
        { name: 'Pasta', price: 0.7 },
    ];

    return (
        <>
            <h1>Lista Prodotti</h1>
            <div>
                <ul>
                    {products.map((product, index) => (
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
