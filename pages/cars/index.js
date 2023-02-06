import Categories from '@/components/module/Categories';
import CarsPage from '@/components/templates/CarsPage';
import carsData  from '../../data/dataCar';
const Details = () => {
    console.log(carsData);
    return (
        <div>
            <Categories/>
            <CarsPage data={ carsData } />
        </div>
    );
};
 
export default Details;