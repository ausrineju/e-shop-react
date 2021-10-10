import { useState, useEffect } from "react";

import Product from "./Product.js";
import ProductForm from "./ProductDialog.js";

const url = "http://localhost:3035/products";

function ProductsList() {
  const [data, setData] = useState([]);
  const [isFetching, setIsFetching] = useState(true);
  const [reFetch, setReFetch] = useState(false);

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
  }, [reFetch]);

  const productList = data.map((product) => (
    <Product {...product} key={product.id} />
  ));

  return (
    <>
      <section className="section" id="section--2">
        <div className="section__title">
          <h3 className="section__header">
            New clothes arivals coming soon ;)
          </h3>
        </div>
        <button className="btn-addImage">Add new image</button>
        <div className="products-row">
          {isFetching ? "Loading" : productList}
        </div>
      </section>
    </>
  );
}
export default ProductsList;
