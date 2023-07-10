import { Route, Routes } from "react-router-dom";
import "./App.css";
import SignUp from "./components/Sign/SignUp";
import SignIn from "./components/Sign/SignIn";
import Header from "./components/Header/Header";
import Catalog from "./components/Catalog/Catalog";
import CategoryPage from "./components/CategoryPage/CategoryPage";
import CollectionPage from "./components/CollectionPage/CollectionPage";

import * as React from "react"

function App() {
  return (
    <>
    <Header/>
      <Routes>
        <Route path="/auth" element={<SignUp />} />
        <Route path="/login" element={<SignIn />} />
        <Route path='/category/:id' element={<CategoryPage/>}/>
        <Route path='/collection/:id' element={<CollectionPage/>}/>
        {/* <Route path="/catalog" element={<Catalog />} /> */}

      </Routes>
    </>
  );
}

export default App;
