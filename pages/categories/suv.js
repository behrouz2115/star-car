import carsData from "@/data/dataCar";
import CarsList from "@/components/templates/CarsList";
const Suv = () => {
    const suvcars = carsData.filter(car => car.category === 'suv');
    return (
        <div>
            <CarsList data={suvcars } />
        </div>
    )
};

export default Suv;