import carsData from "@/data/dataCar";
import CarsList from "@/components/templates/CarsList";
const Sport = () => {
    const sportcar = carsData.filter(car => car.category === 'sport');
    return (
        <div>
            <CarsList data={ sportcar } />
        </div>
    );
};

export default Sport;