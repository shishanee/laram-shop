import { Navigate, Route, Routes } from "react-router-dom";
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
import Profile from "./components/Profile";
import AccessoryPage from "./components/Accessory/AccessoryPage";
import Exit from "./components/Profile/Exit";
import { useSelector } from "react-redux";
import HistoryOfOrders from "./components/Profile/HistoryOfOrders";
import OneOrder from "./components/Profile/OneOrder";

function App() {
  const [theme, setTheme] = React.useState(true);
  type AppState = {
    application: {
      token: string;
    };
  };
  const token: string = useSelector(
    (state: AppState) => state.application.token
  );

  return (
    <>
      <Header theme={theme} setTheme={setTheme} />
      {token ? (
        <Routes>
          <Route path="/exit" element={<Exit />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/orders" element={<HistoryOfOrders />} />
          <Route path="/order/:id" element={<OneOrder />} />
          <Route
            path="/"
            element={<HomePage theme={theme} setTheme={setTheme} />}
          />
          <Route path="/auth" element={<Navigate to={"/"} />} />
          <Route path="/login" element={<Navigate to={"/"} />} />
          <Route path="/collection/:id" element={<CollectionPage />} />
          <Route
            path="/garant"
            element={<Garant theme={theme} setTheme={setTheme} />}
          />
          <Route
            path="/delivery"
            element={<Delivery theme={theme} setTheme={setTheme} />}
          />
          <Route path="/cart" element={<Cart />} />
          <Route path={`/oneClothes/:id`} element={<OneClothes />} />
          <Route path="/category/:id" element={<CategoryPage />} />
          <Route path="/collection/:id" element={<CollectionPage />} />
          <Route path="/accessory/:id" element={<AccessoryPage />} />
          <Route path="/account" element={<Navigate to={"/"} />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/cart" element={<Navigate to={"/account"} />} />
          <Route path="/exit" element={<Navigate to={"/account"} />} />
          <Route path="/profile" element={<Navigate to={"/account"} />} />
          <Route path="/orders" element={<Navigate to={"/account"} />} />
          <Route path="/data" element={<Navigate to={"/account"} />} />
          <Route path="/order/:id" element={<Navigate to={"/account"} />} />
          <Route
            path="/"
            element={<HomePage theme={theme} setTheme={setTheme} />}
          />
          <Route
            path="/auth"
            element={<SignUp theme={theme} setTheme={setTheme} />}
          />
          <Route
            path="/login"
            element={<SignIn theme={theme} setTheme={setTheme} />}
          />
          <Route path="/collection/:id" element={<CollectionPage />} />
          <Route
            path="/garant"
            element={<Garant theme={theme} setTheme={setTheme} />}
          />
          <Route
            path="/delivery"
            element={<Delivery theme={theme} setTheme={setTheme} />}
          />
          <Route path={`/oneClothes/:id`} element={<OneClothes />} />
          <Route path="/category/:id" element={<CategoryPage />} />
          <Route path="/collection/:id" element={<CollectionPage />} />
          <Route path="/accessory/:id" element={<AccessoryPage />} />
          <Route
            path="/account"
            element={<Sign theme={theme} setTheme={setTheme} />}
          />
        </Routes>
      )}

      <Footer theme={theme} setTheme={setTheme} />
    </>
  );
}

export default App;
