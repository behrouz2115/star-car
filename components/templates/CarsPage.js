import styles from './carsPage.module.css';
const CarsPage = ({ data }) => {
    return (
        <div className={styles.container} >
              {
                data.map(car=><p key={car.id}>{car.category}</p>)
           }
        </div>
    );
};

export default CarsPage;