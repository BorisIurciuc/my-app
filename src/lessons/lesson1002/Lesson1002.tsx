import { useEffect, useState } from "react";
import styles from "./lesson1002.module.css";
import { v4 } from "uuid";
import Button from "../../components/button/Button";

interface ICat {
  fact: string;
}

interface IImgCat {
  url: string;
}

export default function Lesson1002() {
  const [factCat, setFactCat] = useState<ICat[]>([]);
  const [imgCat, setImgCat] = useState<IImgCat[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

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
  };

  useEffect(() => {
    getInfoCat();
    getImageCat();
  }, []);

  return (
    <div className={styles.container1002}>
      <h1>Lesson1002</h1>
      <Button
        onButtonClick={() => { getInfoCat(); getImageCat(); }}
        buttonText={'fact'}
        disabled={false}
      />
      <Button onButtonClick={resetCatCard} buttonText={'reset'} disabled={true}/>
      {(isLoading || imgCat.length === 0) && <h3>is loading</h3>}
      {(!isLoading || imgCat.length > 0) && (
        <>
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
        </>
      )}
    </div>
  );
}


  /* <> 
{setTimeout(() => {
<h1>wait</h1>
}, 3000)}
<h3>is loading</h3>
<div className={styles.loader}></div>
</> */

