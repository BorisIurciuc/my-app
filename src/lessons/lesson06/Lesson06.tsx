import React from 'react';
import {useState} from 'react';
import { brotherhood } from './data';
import './style.css';
import BrotherCard from '../../components/brotherCard/BrotherCard';

export default function Lesson06() {
  const [brothers, setBrothers] = useState(brotherhood)
  return (
    <div className="container-brotherhood">
      <h1>Lesson 06</h1>
      {brothers.map(brother => (
        <BrotherCard setBrothers={setBrothers} key={brother.id} brotherProp={brother} />
      ))}
    </div>
  );
}
