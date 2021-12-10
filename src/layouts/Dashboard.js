import React from "react";
import Categories from "./Categories";
import { Grid } from "semantic-ui-react";
import ProductList from "../Pages/ProductList";
import { Route, Routes } from "react-router-dom";
import ProductDetails from "../Pages/ProductDetails";
import CartDetail from "../Pages/CartDetail";

export default function Dashboard() {
  return (
    <div>
      <Grid>
        <Grid.Row>
          <Grid.Column width={4}>
            <Categories />
          </Grid.Column>
          <Grid.Column width={12}>
            <Routes>
            <Route path="/" element={<ProductList/>} />
            <Route path="/Products" element={<ProductList/>} />
            <Route path="/products/:name" element={<ProductDetails/>} />
            <Route path="/cart" element={<CartDetail/>} />
            </Routes>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
