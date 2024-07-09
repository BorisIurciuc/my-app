import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { IProduct } from "../FakeStore";
import styles from "./product.module.css";
import Button from "../../button/Button";

export const Product = () => {
  const initialValue: IProduct = {
    id: 0,
    title: "",
    price: 0,
    description: "",
    category: "",
    image: "",
    rating: {
      rate: 0,
      count: 0,
    },
  };

  const [product, setProduct] = useState<IProduct>(initialValue);
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  return (
    <div className={styles.productContainer}>
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <img width={200} src={product.image} alt="" />
      <h2>{id}</h2>
      <Link to={"/fakeStore"}>
        <Button buttonText="zuruck"></Button>
      </Link>
    </div>
  );
};
export default Product;
