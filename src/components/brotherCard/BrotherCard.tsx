import { v4 } from 'uuid';
import { useState } from 'react';
import styles from './brotherCard.module.css'
import Button from '../button/Button';

interface IBrother {
    id: number;
    name: string;
    race: string;
    image: string;
    skills: string[];
}
interface IBrotherComplex {
    brotherProp: IBrother;
    setBrothers: React.Dispatch<React.SetStateAction<IBrother[]>>;
}

export default function BrotherCard({ brotherProp, setBrothers }: IBrotherComplex) {

  // -----------------------------Button delete-----------------------
  const deleteCard = (id: number): void => {
        setBrothers(el => el.filter(brother => brother.id !== id))
    }

  // -----------------------------Button feedback-----------------------
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);
  const addLike = () => {
    setLike((count) => count + 1);
  };
  const addDislike = () => {
    setDislike((count) => count + 1);
  };

    return(
        <div className={styles.divBrotherCard}>
            <h3>{brotherProp.name}</h3>
            <img src={brotherProp.image} alt={brotherProp.name} />
            <p>{brotherProp.race}</p>
            <ul>
                {brotherProp.skills.map(skill => (
                    <li key={v4()}>
                        {skill}
                    </li>
                ))}
            </ul>
            <div className={styles.divFeedback}>
                <h4>Your feedback </h4>
                <div>
                <Button onButtonClick={() => addLike()}  />
                    {like}
                <Button onButtonClick={() => addDislike()} />
                    {dislike}
                </div>
            </div>
            <Button onButtonClick={() => deleteCard(brotherProp.id)} />
        </div>
    )
}