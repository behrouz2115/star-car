import styles from './Categories.module.css';
import Link from 'next/link';
import Suv from '../icons/Suv';
import Sedan from '../icons/Sedan';
import Hatchback from '../icons/Hatchback';
import Sport from '../icons/Sport';

const Categories = () => {
    return (
        <div className={styles.container}>
            <div>
                <p>Sedan</p>
                <Sedan/>
            </div>
            <div>
                <p>SUV</p>
                <Suv/>
            </div>
            <div>
                <p>Hatchback</p>
                <Hatchback/>
            </div>
            <div>
                <p>Sport</p>
                <Sport/>
            </div>
        </div>
    );
};

export default Categories;