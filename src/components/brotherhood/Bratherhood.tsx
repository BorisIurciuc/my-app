import { useState } from 'react';
import { brotherhood } from './data';
import { IBrother } from './type';
import styles from './bratherhood.module.css';
import BrCard from './brotherCard/BrotherCard';
import { useNavigate } from 'react-router-dom';

export default function BrotherHood() {
  const [brothers, setBrothers] = useState<IBrother[]>(brotherhood);
  console.log(brothers);
  const navigate = useNavigate()

  return (
    <>
      <div className={styles.buttonUnaited}>
        <img src="https://avatars.dzeninfra.ru/get-zen_doc/9427930/pub_644fb58c0726a464173699b1_644fb624e71c8d3b246c8b08/scale_1200" alt="" />
        <button
          type='button'
          onClick={() => navigate('/myform')}
        >
          Присоединяйся к братству
        </button>
      </div>
      <h1>BrotherHood</h1>
      <div className={styles.containerBrotherhood}>
        {brothers.map(brother => (
        <BrCard setBrothers={setBrothers} key={brother.id} brotherProp={brother} />
      ))}
    </div>
    </>
  );
}