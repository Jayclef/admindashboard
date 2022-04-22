import TopBar from "./components/TopBar";
import SideBar from "./components/SideBar";
import "./app.css";
import HomePage from "./components/HomePage";
import { BrowserRouter , Routes, Route } from "react-router-dom";
import UserList from "./components/UserList";
import User from "./components/User";
import NewUser from "./components/NewUser";
import ProductList from "./ProductList";
import Product from "./Product";
function App() {
  return (
    <BrowserRouter>
      <TopBar />
      <div className="container">
        <SideBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/user/:id" element={<User />} />
          <Route path="/newUser" element={<NewUser />} />
          <Route path="/products" element={<ProductList/>} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/newproduct" element={<NewUser />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
} 

export default App;
