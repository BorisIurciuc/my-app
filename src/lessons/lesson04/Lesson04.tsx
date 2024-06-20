import AnimalCard from '../../components/animalCard/AnimalCard'
import { lionData, zebraData } from "./data"
import Button from "../../components/button/Button";

function Lesson04() {
    return (
        <div className="div">
            <h1>Lesson 04</h1>
            <AnimalCard animalPropsData={lionData}/>
            <AnimalCard animalPropsData={zebraData}/>
            <Button buttonText={'first'} buttonType={'button-primary'} onClick={function (): void {
                throw new Error('Function not implemented.');
            } }/>
            <Button buttonText={'second'} buttonType={'button-danger'} onClick={function (): void {
                throw new Error('Function not implemented.');
            } }/>
        </div>
    )
}
export default Lesson04