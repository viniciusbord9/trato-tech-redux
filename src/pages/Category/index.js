import styles from './Category.module.scss';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Header from 'components/Header';

export default function Category() {
    const { categoryId } = useParams();
    const { category, items } = useSelector( state => ({
            category: state.categories.find(category => category.id === categoryId),
            items: state.items.filter(item => item.category === categoryId) 
        })
    );
    return (
        <div className="container">
            <Header
                title={category.name}
                description={category.description}
                image={category.header}
            />
            <div className={styles.items}>
                {items?.map(item => (
                    <div key={item.id}>
                        <span>{item.title}</span>
                    </div>
                 ))}
            </div>
        </div>
    )
}