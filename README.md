# 🛒 Product Management Dashboard (React)

A simple React application that simulates an admin dashboard for managing products. The app allows users to perform full CRUD operations using a fake backend powered by json-server.

---

## 🚀 Features

- ➕ Add new products with validation (prevents empty inputs)
- 📋 Display all products in a clean UI
- 🔍 Search functionality (by ID, Name, and Price)
- 🗑️ Delete products
- ✏️ Edit existing products
- 📄 View product details
- 🔄 Real-time updates with API calls

---

## 🧰 Tech Stack

- React.js
- React Router
- Axios
- JSON Server (Fake REST API)

---

## 📦 Installation & Setup

1. Clone the repository:
```bash
git clone https://github.com/your-username/your-repo.git
cd your-repo

Install dependencies:
npm install
Run the fake server:
npx json-server --watch db.json --port 3001
Run the React app:
npm start
🌐 API Endpoint
http://localhost:3001/products
🔍 Search Logic

The search bar filters products based on:

Product ID
Product Name
Product Price

Example:

Typing 2 shows product with ID = 2
Typing Laptop shows product by name
Typing 9000 shows product by price
✅ Validation
Prevents adding empty products
Ensures both name and price are filled


📁 Project Structure
src/
 ├── components/
 │    ├── Navbar.jsx
 │    ├── ProductForm.jsx
 │    ├── ProductList.jsx
 │    ├── ProductDetails.jsx
 │    └── EditProduct.jsx
 ├── App.js
 └── App.css

 
📌 Notes
The backend is simulated using json-server
Axios is used for all HTTP requests
React Router handles navigation between pages


👩‍💻 Author
Mariam