// ProductDetails.jsx
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:3001/products/${id}`)
      .then((res) => setProduct(res.data));
  }, []);

  return (
    <div className="container">
      <h1 className="title">Product Details</h1>

      <div className="card details-card">
        <h2>{product.name}</h2>
        <p><strong>Price:</strong> {product.price}</p>
        <p><strong>ID:</strong> {product.id}</p>

        <Link to="/products">
          <button>Back</button>
        </Link>
      </div>
    </div>
  );
}

export default ProductDetails;