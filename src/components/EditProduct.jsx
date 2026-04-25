import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function EditProduct() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  useEffect(() => {
    axios.get(`http://localhost:3001/products/${id}`)
      .then((res) => {
        setName(res.data.name);
        setPrice(res.data.price);
      });
  }, []);

  const updateProduct = () => {
    axios.put(`http://localhost:3001/products/${id}`, {
      id,
      name,
      price
    });

    navigate("/products");
  };

  return (
    <div>
      <h1>Edit</h1>

      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />

      <button onClick={updateProduct}>
        Update
      </button>
    </div>
  );
}

export default EditProduct;