import { Route, Routes } from "react-router-dom";
import "./App.css";
import SignUp from "./components/Sign/SignUp";
import SignIn from "./components/Sign/SignIn";
import Header from "./components/Header/Header";
import CategoryPage from "./components/CategoryPage/CategoryPage";
import CollectionPage from "./components/CollectionPage/CollectionPage";
import * as React from "react";
import Sign from "./components/Sign/Sign";
import Cart from "./components/Cart";
import HomePage from "./components/HomePage/HomePage";
import Footer from "./components/Footer/Footer";
import Garant from "./components/Garant/Garant";
import Delivery from "./components/Delivery/Delivery";
import OneClothes from "./components/OneClothes/OneClothes";
import Acces from "./components/Acces/Acces";

function App() {
  const [theme, setTheme] = React.useState(false)
  return (
    <>
      <Header theme={theme} setTheme={setTheme} />
      <Routes>

        <Route path="/" element={<HomePage theme={theme} setTheme={setTheme} />}></Route>
        <Route path="/account" element={<Sign theme={theme} setTheme={setTheme} />} />
        <Route path="/auth" element={<SignUp theme={theme} setTheme={setTheme} />} />
        <Route path="/login" element={<SignIn theme={theme} setTheme={setTheme} />} />

        <Route path='/category/:id' element={<CategoryPage/>}/>
        <Route path='/collection/:id' element={<CollectionPage/>}/>
        {/* <Route path="/catalog" element={<Catalog />} /> */}


        <Route path="/garant" element={<Garant theme={theme} setTheme={setTheme} />} />
        <Route path="/delivery" element={<Delivery theme={theme} setTheme={setTheme} />} />
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/account" element={<Sign />} />
        <Route path="/auth" element={<SignUp />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/cart" element={<Cart />} />
        <Route path={`/oneClothes/:id`} element={<OneClothes />} />
        <Route path="/category/:id" element={<CategoryPage />} />
        <Route path="/collection/:id" element={<CollectionPage />} />
        <Route path="/acces/:id" element={<Acces />} />
        <Route path="/garant" element={<Garant />} />
        <Route path="/delivery" element={<Delivery />} />

      </Routes>
      <Footer theme={theme} setTheme={setTheme} />
    </>
  );
}

export default App;
