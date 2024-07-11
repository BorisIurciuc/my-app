import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styles from "./product.module.css";
import Button from "../../button/Button";

interface IProduct {
  id: number;
  title: string;
  price: number;
  image: string;
  description: string
}

export const Product = () => {
  const initialValue: IProduct = {
    id: 0,
    title: "",
    price: 0,
    image: "",
    description: ""
  };


  const [product, setProduct] = useState<IProduct>(initialValue);
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
      console.log('ID ',id);

  }, [id]);

  return (
    <div className={styles.productContainer}>
      <h1>{product.title}</h1>
      <img width={200} src={product.image} alt="" />
      <p>{product.description}</p>
      <h2>{id}</h2>
      <Link to={"/fakeStore"}>
        <Button buttonText="zuruck"></Button>
      </Link>
    </div>
  );
};
export default Product;
