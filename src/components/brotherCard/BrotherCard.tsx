import { v4 } from 'uuid';

interface IBrother {
    id: number;
    name: string;
    race: string;
    image: string;
    skills: string[];
}

export default function BrotherCard({brotherProp, setBrothers}: {brotherProp: IBrother, setBrothers: React.Dispatch<React.SetStateAction<IBrother[]>>}) {

    const deleteCard = (id: number): void => {
        setBrothers(el => el.filter(brother => brother.id !== id))
    }

    return(
        <div>
            <h3>{brotherProp.name}</h3>
            <img src={brotherProp.image} alt="" />
            <p>{brotherProp.race}</p>
            <ul>
                {brotherProp.skills.map(skill => (
                    <li key={v4()}>
                        {skill}
                    </li>
                ))}
            </ul>
            <button onClick={() => deleteCard(brotherProp.id)}>delete</button>
            
        </div>
    )
}
