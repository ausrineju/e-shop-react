import { useState, useEffect } from "react";

import Product from "./Product.js";
import ProductForm from "./ProductDialog.js";

const url = "http://localhost:3000/products";

function ProductsList() {
  const [data, setData] = useState([]);
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(url);
        const fetchedData = await response.json();
        setData(fetchedData);
        setIsFetching(false);
      } catch (e) {
        console.log(e);
        setIsFetching(false);
        setData([]);
      }
    };
    fetchProducts();
  });

  return (
    <>
      <section className="section" id="section--2">
        <div className="section__title">
          <h3 className="section__header">New clothes arivals coming soon ;)</h3>
        </div>
        <button className="btn-addImage">Add new image</button>
        <div className="products-row"> </div>
      </section>
    </>
  );
}
export default ProductsList;
