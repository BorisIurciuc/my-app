import { useState } from "react";
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

  function getFirst<T>(arr: T[]): T {
    return arr[0];
  }

  getFirst(fruits);

  // type Sum<T> = () => T
  enum Season {
    spring = "Spring",
    summer = "Summer",
    winter = "Winter",
    autumn = "Autumn",
  }
  const summer = Season.summer;
  console.log(summer);

  // -----------------------------Component BrotherCard-------------------
  const [brothers, setBrothers] = useState(brotherhood);

  return (
    <div className="divLesson08">
      <h1>Lesson08</h1>
        <h2>The Fellowship of the Ring</h2>
        {brothers.map((brother) => (
          <BrotherCard
            brotherProp={brother}
            setBrothers={setBrothers}
            key={brother.id}
          />
        ))}
    </div>
  );
};
export default Lesson08;

