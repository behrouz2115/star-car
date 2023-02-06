import styles from './SearchBar.module.css';
const SearchBar = () => {
    return (
        <div className={styles.container}>
            <div>
                <input placeholder='Inter min-price'/>
                <input placeholder='Inter max-price'/>
            </div>
            <button>Search</button>
        </div>
    );
};

export default SearchBar;