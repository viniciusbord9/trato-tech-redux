import styles from './Navbar.module.scss';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import classNames from 'classnames';
import { RiShoppingCart2Line, RiShoppingCartFill } from 'react-icons/ri';
import Search from 'components/Search';

const iconeProps = {
    color: 'white',
    size: 24
  }


export default function Navbar() {    
    return(
        <nav className={styles.nav}>
             <Logo className={styles.logo} />
             <ul className={styles.links}>
                <li>
                    <a href='/' className={classNames(styles.link, {
                    [styles.selected] : window.location.pathname === '/'
                })}> Home </a>
                </li>
             </ul>
             <div className={styles.search}>
                <Search />
             </div>
             <div className={styles.icons}>
                <a href='/checkout'>
                    {
                        window.location.pathname === '/checkout' ?
                        <RiShoppingCartFill {...iconeProps} /> :
                        <RiShoppingCart2Line {...iconeProps} />
                    }
                </a>
             </div>
        </nav>
    );
}