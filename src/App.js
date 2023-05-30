import Costs from './components/Costs/Costs.js'

const App = () => {

    const costs = [
        {
            date: new Date(2021, 2, 12),
            description: 'Холодльник',
            amount: 999.99
        },
        {
            date: new Date(2021, 11, 25),
            description: 'MacBook',
            amount: 1254.72
        },
        {
            date: new Date(2021, 1, 4),
            description: 'Джинсы',
            amount: 49.99
        }
    ]

    return (
        <div>
            <h1>Изучение Реакт</h1>
            <Costs costs={costs}/>

        </div>
    );
}

export default App;
