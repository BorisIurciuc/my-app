import { useState } from "react";
import "./data";
import "./style.css";
import { brotherhood } from "./data";
import BrotherCard from "../../components/brotherCard/BrotherCard";

const Homework08 = () => {

  const [brothers, setBrothers] = useState(brotherhood);

  return (
    <div className="divLesson08">
      <h1>Homework 08</h1>
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
export default Homework08;

