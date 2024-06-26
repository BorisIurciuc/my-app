import { v4 } from 'uuid';
import { IBrother } from '../../homeworks/homework08_02/type';
import { Dispatch, SetStateAction } from 'react';
import Button from '../button/Button';
import styles from './brCard.module.css'

interface IBrotherProps {
    brotherProp: IBrother
    setBrothers: Dispatch<SetStateAction<IBrother[]>>
}
export default function BrCard({ brotherProp, setBrothers }: IBrotherProps) {

    const delBrother = (id: number) => {
        setBrothers(e => e.filter(brother => brother.id !== id))
    }
  return (
    <div className={styles.brotherCardContainer}>
      <h2>{brotherProp.name}</h2>
      <p>race: {brotherProp.race}</p>
      <ol>
        {brotherProp.skills.map(skill => (
          <li key={v4()}>{skill}</li>
        ))}
      </ol>
      <img src={brotherProp.image} alt="" />
      <button onClick={() => delBrother(brotherProp.id)}>del</button>
      <Button />
    </div>
  );
}