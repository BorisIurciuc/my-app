import './animalCard.css'

interface IAnimalProps {
    animalPropsData:{
    name: string;
    species: string;
    img: string
    }
}


const AnimalCard: React.FC<IAnimalProps> = ({animalPropsData}) => {
    return (
        <div className='containerAnimal'>
            <div className='containerAnimalInto'>

            <h3>AnimalCard</h3>
            <h4>{animalPropsData.name}</h4>
            <p>I am{animalPropsData.species}</p>
            <img src={animalPropsData.img} className='imgAnimal' alt="" />
            </div>
        </div>
    )
}

export default AnimalCard;
