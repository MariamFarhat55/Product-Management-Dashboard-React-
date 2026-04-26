import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateProduct } from "../redux/productSlice";

function EditProduct() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:3001/products/${id}`)
      .then((res) => {
        setName(res.data.name);
        setPrice(res.data.price);
      });
  }, []);

  const handleUpdate = async () => {
    await dispatch(
      updateProduct({
        id,
        name,
        price
      })
    );

    navigate("/products");
  };

  return (
    <div className="container">
      <h1 className="title">Edit Product</h1>

      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />

      <button onClick={handleUpdate}>
        Update
      </button>
    </div>
  );
}

export default EditProduct;