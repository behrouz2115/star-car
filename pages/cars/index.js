import CarsPage from '@/components/templates/CarsPage';
import carsData  from '../../data/dataCar';
const Details = () => {
    console.log(carsData);
    return (
        <div>
            <CarsPage data={ carsData } />
        </div>
    );
};

export default Details;