// ProductList.jsx
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = () => {
    axios
      .get("http://localhost:3001/products")
      .then((res) => setProducts(res.data));
  };

  const deleteProduct = (id) => {
    axios
      .delete(`http://localhost:3001/products/${id}`)
      .then(() => getProducts());
  };

  const filteredProducts = products.filter((item) =>
    item.id.toString().includes(search) ||
    item.name.toLowerCase().includes(search.toLowerCase()) ||
    item.price.toString().includes(search)
  );

  return (
    <div className="container">
      <h1 className="title">Products</h1>

      <input
        className="search"
        type="text"
        placeholder="Search..."
        onChange={(e) => setSearch(e.target.value)}
      />

      {filteredProducts.map((item) => (
        <div className="card" key={item.id}>
          <h2>{item.name}</h2>
          <p>Price: {item.price}</p>
          <p>ID: {item.id}</p>

          <div className="actions">
            <button onClick={() => deleteProduct(item.id)}>Delete</button>

            <Link to={`/edit/${item.id}`}>
              <button>Edit</button>
            </Link>

            <Link to={`/details/${item.id}`}>
              <button>Details</button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;