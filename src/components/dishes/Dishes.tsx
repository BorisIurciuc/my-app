import React, { useEffect, useState } from "react";
import dishData from "./dishData";
import DishProps from "../dishProps/DishProps";
import './dishes.css';

interface IIngredient {
    id: number;
    name: string;
    quantity: string;
}

interface IDish {
    id: number;
    name: string;
    description: string;
    image: string;
    ingredients: IIngredient[];
}

const Dishes: React.FC = () => {
    const [dishes, setDishes] = useState<IDish[]>([]);

    useEffect(() => {
        setDishes(dishData);
    }, []);

    const removeDish = (id: number) => {
        setDishes(dishes.filter(dish => dish.id !== id));
    }

    return (
        <div className="divDishes">
            <h2>Suggested dishes recipes</h2>
            <DishProps dishes={dishes} removeDish={removeDish} />
        </div>
    );
}

export default Dishes;
