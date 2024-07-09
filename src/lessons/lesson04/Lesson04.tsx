import AnimalCard from '../../components/example/animalCard/AnimalCard'
import { lionData, zebraData } from "./data"
import Button from "../../components/button/Button";

function Lesson04() {
    return (
        <div className="div">
            <h1>Lesson 04</h1>
            <AnimalCard animalPropsData={lionData}/>
            <AnimalCard animalPropsData={zebraData}/>
            <Button buttonText={'first'} isGetButton={true}/>
            <Button buttonText={'second'} isGetButton={false}/>
        </div>
    )
}
export default Lesson04