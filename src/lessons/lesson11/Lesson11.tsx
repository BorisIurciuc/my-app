import { useEffect, useState } from "react";
import styles from "./lesson11.module.css";
import { v4 } from "uuid";
import Button from "../../components/button/Button";
import MyHeader from "../../components/myHeader/MyHeader";
import MyCatFactInputForm from "../../components/myCatFactInputForm/MyCatFactInputForm";

interface ICat {
  fact: string;
}

interface IImgCat {
  url: string;
}

export default function Lesson11() {
  const [factCat, setFactCat] = useState<ICat[]>([]);
  const [imgCat, setImgCat] = useState<IImgCat[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isActivFormBtn, setIsActivFormBtn] = useState<boolean>(false);

  async function getInfoCat() {
    setIsLoading(true);
    const res = await fetch("https://catfact.ninja/fact");
    const data = await res.json();
    setFactCat((prev) => [...prev, data]);
    setIsLoading(false);
  }

  async function getImageCat() {
    const res = await fetch("https://api.thecatapi.com/v1/images/search");
    const data = await res.json();
    setImgCat(data);
    setIsLoading(false);
  }

  const resetCatCard = () => {
    setFactCat([]);
    setImgCat([]);
  };

  useEffect(() => {
    getInfoCat();
    getImageCat();
  }, []);

  function changeToggleFormBtn() {
    setIsActivFormBtn((prev) => !prev);
  }

  return (
    <>
      <section className={styles.mainSection}>
        <div className={styles.container1002}>
          <h1>cat fact</h1>
          {isLoading && <div className={styles.loader}></div>}
          {(!isLoading || imgCat.length > 0) && (
            <div className={styles.containerFactImageCat}>
              <ul>
                {factCat.map((el) => (
                  <li key={v4()}>
                    <p>{el.fact}</p>
                  </li>
                ))}
              </ul>
              <ol>
                {imgCat.map((el) => (
                  <li key={v4()}>
                    <img src={el.url} alt={"cat"} />
                  </li>
                ))}
              </ol>
            </div>
          )}
          <div className={styles.containerButtons}>
            <Button
              onButtonClick={() => {
                getInfoCat();
                getImageCat();
              }}
              buttonText={"Get new fact"}
              disabled={false}
            />
            <Button
              onButtonClick={resetCatCard}
              buttonText={"Reset facts"}
              disabled={true}
            />
            <Button
              onButtonClick={changeToggleFormBtn}
              buttonText={"Add new fact"}
              disabled={false}
            />
          </div>
          <div className={styles.factInputForm}>
            {isActivFormBtn && <MyCatFactInputForm />}
          </div>
        </div>
      </section>
    </>
  );
}
