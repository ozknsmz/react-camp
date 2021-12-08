import React from "react";
import Categories from "./Categories";
import Navi from "./Navi";
import ProductList from "../Pages/ProductList"




export default function Dashboard() {
  return (
    <div>
        <Categories/>
        <ProductList/>
    </div>
  );
}
