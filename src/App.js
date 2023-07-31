import React, {useState} from "react";
import Costs from "./components/Costs/Costs.js";
import NewCost from "./components/NewCost/NewCost.js";

const INITIAL_COSTS = [
    {
        id: "c1",
        date: new Date(2021, 2, 12),
        description: "Холодльник",
        amount: 999.99,
    },
    {
        id: "c2",
        date: new Date(2022, 11, 25),
        description: "MacBook",
        amount: 1254.72,
    },
    {
        id: "c3",
        date: new Date(2021, 1, 4),
        description: "Джинсы",
        amount: 49.99,
    },
];

const App = () => {

    const [costs, setCosts] = useState(INITIAL_COSTS)


    const addCostHandler = (cost) => {
        setCosts(prevCosts => {
            return [cost, ...prevCosts]
        })
    };

    return (
        <div>
            <NewCost onAddCost={addCostHandler}/>
            <Costs costs={costs}/>
        </div>
    );
};

export default App;
