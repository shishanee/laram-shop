import { Route, Routes } from "react-router-dom";
import "./App.css";
import SignUp from "./components/Sign/SignUp";
import SignIn from "./components/Sign/SignIn";
import Header from "./components/Header/Header";
import Sign from "./components/Sign/Sign";
import Cart from "./components/Cart/Cart";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/account" element={<Sign />} />
        <Route path="/auth" element={<SignUp />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
    </>
  );
}

export default App;
