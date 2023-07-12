import { Route, Routes } from "react-router-dom";
import "./App.css";
import SignUp from "./components/Sign/SignUp";
import SignIn from "./components/Sign/SignIn";
import Header from "./components/Header/Header";

import Catalog from "./components/Catalog/Catalog";
import CategoryPage from "./components/CategoryPage/CategoryPage";
import CollectionPage from "./components/CollectionPage/CollectionPage";

import * as React from "react"

import Sign from "./components/Sign/Sign";
import HomePage from "./components/HomePage/HomePage";
import Footer from "./components/Footer/Footer";
import Garant from "./components/Garant/Garant";
import Delivery from "./components/Delivery/Delivery";
import Profile from "./components/Profile/Profile";


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/personal" element={<Profile />}/>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/account" element={<Sign />} />
        <Route path="/auth" element={<SignUp />} />
        <Route path="/login" element={<SignIn />} />

        <Route path='/category/:id' element={<CategoryPage/>}/>
        <Route path='/collection/:id' element={<CollectionPage/>}/>
        {/* <Route path="/catalog" element={<Catalog />} /> */}


        <Route path="/garant" element={<Garant />} />
        <Route path="/delivery" element={<Delivery />} />

      </Routes>
      <Footer />
    </>
  );
}

export default App;
