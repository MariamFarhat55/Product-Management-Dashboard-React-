import { useState } from "react";
import axios from "axios";

function ProductForm() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

 const addProduct = () => {
  if (name.trim() === "" || price === "") {
    alert("Fill all fields");
    return;
  }

  axios.post("http://localhost:3001/products", {
    id: Date.now(),
    name,
    price,
  });


    setName("");
    setPrice("");
  };

  return (
    <div className="container">
      <h1 className="title">Product Form</h1>

      <div className="form-group">
        <label>Product Name</label>
        <input
          type="text"
          placeholder="Enter product name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label>Price</label>
        <input
          type="number"
          placeholder="0"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>

      <button onClick={addProduct}>Add Product</button>
    </div>
  );
}

export default ProductForm;