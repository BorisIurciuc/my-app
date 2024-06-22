import { useState } from "react";
import Button from "../../components/button/Button";
import "./data";
import "./style.css";
import { brotherhood } from "./data";
import BrotherCard from "../../components/brotherCard/BrotherCard";

const Lesson08 = () => {
  // -----------------------------Theory-----------------------------
  // 1.Generic
  type MyArray<T> = T[];
  const fruits: MyArray<string> = ["a", "c", "c"];
  console.log(fruits);
  const age: MyArray<number> = [25, 12, 6];
  console.log(age);

  // type Sum<T> = () => T
  enum Season {
    spring = "Spring",
    summer = "Summer",
    winter = "Winter",
    autumn = "Autumn",
  }
  const summer = Season.summer;
  console.log(summer);

  // -----------------------------Component Button-----------------------
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);
  const addLike = () => {
    setLike((count) => count + 1);
  };
  const addDislike = () => {
    setDislike((count) => count + 1);
  };

  // -----------------------------Component BrotherCard-------------------
  const [brothers, setBrothers] = useState(brotherhood)

  return (
    <div className="divLesson08">
      <h1>Lesson08</h1>
      <div className="buttonLesson08">
        <h3>Feedback form</h3>
        <div>
          <Button onClick={addLike} buttonText={"like"}buttonType={"button-primary"}/>
          <h3>{like}</h3>
        </div>
        <div>
          <Button onClick={addDislike} buttonText={"dislike"} buttonType={"button-danger"}/>
          <h3>{dislike}</h3>
        </div>
      </div>
      <div className="div-brother">
      <h3>The Fellowship of the Ring</h3>
      {brothers.map(brother => (
          <BrotherCard brotherProp={brother} setBrothers={setBrothers} key={brother.id}/>
        ))}
      </div>
    </div>
  );
};
export default Lesson08;
