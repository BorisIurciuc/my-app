import React, { useEffect, useState } from "react";
import { IProduct } from "../type/IProduct";
import { Link, useParams } from "react-router-dom";
import styles from "./dummyProductSelect.module.css";
import Button from "../../button/Button";

const DummyProductSelect = () => {
  const initialData: IProduct = {
    id: 0,
    title: "",
    description: "",
    category: "",
    price: 0,
    brand: "",
    thumbnail: "",
  };

  const [productSelect, setProductSelect] = useState<IProduct>(initialData);
  const { id } = useParams();

  useEffect(() => {
    async function getProductSelected() {
      const res = await fetch(`https://dummyjson.com/products/${id}`);
      const data = await res.json();
      setProductSelect(data);
    }
    getProductSelected();
  }, [id]);

  return (
    <>
      <h4>DummyProductSelect</h4>
      <div className={styles.containerDummyProduct}>
        <h2>{productSelect.title}</h2>
        <p>{productSelect.description}</p>
        <p>{productSelect.category}</p>
        <h4>{productSelect.brand}</h4>
        <img src={productSelect.thumbnail} alt="" />
        <h5>price: {productSelect.price}€</h5>
        <Link to={"/dummyProduct"}>
          <Button buttonText="zurück"></Button>
        </Link>
      </div>
    </>
  );
};

export default DummyProductSelect;
