import React, { useEffect, useState } from "react";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data.products))
      .catch(() => alert("Data not fetched"));
  }, []);
  return (
    <div className="container">
      <h2>Products</h2>
      <div className="row">
        {products.map((product) => (
          <div className="col-md-4 mb-3" key={product.id}>
            <div className="card">
              <img src={product.thumbnail} className="card-img-top" alt={product.title}
              /> 
            <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">{product.description}</p>
                <p className="card-text">Price: Rs. {product.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
