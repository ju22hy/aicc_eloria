import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Main/Home";
import About from "./components/About/About";
import Product from "./components/Product/Product";
import Login from "./components/Auth/Login";
import JoinInfo from "./components/Auth/JoinInfo";
import Cart from "./components/Mypage/Cart";
import MyPage from "./components/Mypage/MyPage";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="App relative">
        {/* <div className="bg-red-800 w-1/2 h-64 absolute">
          <p className="text-right text-white font-semibold text-3xl">
            TESTTEST
          </p>
        </div> */}
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/category1" element={<Product />} />
          <Route path="/category2" element={<Product />} />
          <Route path="/login" element={<Login />} />
          <Route path="/joininfo" element={<JoinInfo />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/mypage" element={<MyPage />} />

          {/* Default route to Home component */}
          <Route path="/" element={<Navigate to="/home" />} />

          {/* Catch all unmatched routes and redirect to Home */}
          <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
