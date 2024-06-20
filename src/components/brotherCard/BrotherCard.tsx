import { v4 } from 'uuid';

interface BrotherProps {

}

interface Brother {
    name: string;
    race: string;
    id: number;
    image: string;
    skills: string[];
}

export default function brotherPropCard({ brotherProp, setBrothers }: { brotherProp: Brother, setBrothers: React.Dispatch<React.SetStateAction<Brother[]>> }) {
    // rest of the code...



    const delBrother = (id: number) => {
        setBrothers(prev => prev.filter(brother => brother.id !== id))
    }
    return (
        <div>
            <h2>{brotherProp.name}</h2>
            <p>race: {brotherProp.race}</p>
            <p>brother id: {brotherProp.id}</p>
            <ol>
                {brotherProp.skills.map(skill => (
                    <li key={v4()}>{skill}</li>
            ))}
            </ol>
            <img src={brotherProp.image} alt="" />
            <button onClick={() => delBrother(brotherProp.id)}>delete</button>
        </div>
    );
}