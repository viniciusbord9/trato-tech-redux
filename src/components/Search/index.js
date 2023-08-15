import styles from './Search.module.scss';


export default function Search() {
    return(
        <div className={styles.search}>
            <input className={styles.input} type='text' placeholder='Search'/>
        </div>
    )
}