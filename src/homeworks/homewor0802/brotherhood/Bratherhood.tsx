import { useState } from 'react';


import { brotherhood } from '../data';
import { IBrother } from '../type';
import './style.css';
import BrCard from '../../../components/brCard/BrCard';

export default function BrotherHood() {
  // типизируем массив из useState() через дженерик 
  const [brothers, setBrothers] = useState<IBrother[]>(brotherhood);
  console.log(brothers);
  return (
    <div className="container-brotherhood">
      <h1>6. React: map() components</h1>
      {brothers.map(brother => (
        <BrCard setBrothers={setBrothers} key={brother.id} brotherProp={brother} />
      ))}
    </div>
  );
}