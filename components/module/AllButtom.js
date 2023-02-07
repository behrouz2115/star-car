import styles from './AllButtom.module.css';
import Link from 'next/link';

const AllButtom = () => {
    return (
        <div className={styles.container}>
            <Link href='/cars'>
               See All Cars
            </Link>
        </div>
    );
};

export default AllButtom;