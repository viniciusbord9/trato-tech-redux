import Header from "components/Header";
import styles from './Home.module.scss';
import relogio from 'assets/inicial.png';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Home() {
    const navigate = useNavigate();
    const categories = useSelector( state => state.categories);
    return (
        <div className="container">
            <Header
                title='Classificados Tech'
                description='Compre diversos tipos de produtos no melhor site do Brasil!'
                image={relogio}
                className={styles.header}
            />
            <div className={styles.categorias}>
                <div className={styles['category-title']}>
                    <h1>Categorias</h1>
                </div>
                <div className={styles['category-container']}>
                        {categories.map((category, index) => (
                            <div index={index} onClick={() => navigate(`category/${category.id}`)}>
                                <img src={category.thumbnail} alt={category.name} />
                                <h2>{category.name}</h2>
                            </div>
                        ))
                        }
                </div>
            </div>
        </div>
    )
}