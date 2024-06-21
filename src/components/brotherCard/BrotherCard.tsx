import React from 'react';
import { v4 as uuidv4 } from 'uuid';

interface Brother {
    name: string;
    race: string;
    id: number;
    image: string;
    skills: string[];
}

interface BrotherPropCardProps {
    brotherProp: Brother;
    setBrothers: React.Dispatch<React.SetStateAction<Brother[]>>;
}

const BrotherPropCard: React.FC<BrotherPropCardProps> = ({ brotherProp, setBrothers }) => {
    const delBrother = (id: number) => {
        setBrothers(prev => prev.filter(brother => brother.id !== id));
    };

    return (
        <div>
            <h2>{brotherProp.name}</h2>
            <p>Race: {brotherProp.race}</p>
            <p>Brother ID: {brotherProp.id}</p>
            <ol>
                {brotherProp.skills.map(skill => (
                    <li key={uuidv4()}>{skill}</li>
                ))}
            </ol>
            <img src={brotherProp.image} alt={`${brotherProp.name}'s`} />
            <button onClick={() => delBrother(brotherProp.id)}>Delete</button>
        </div>
    );
};

export default BrotherPropCard;
