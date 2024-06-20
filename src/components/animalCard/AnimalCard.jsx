import './animalCard.css'


function AnimalCard({animalPropsData}) {
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
