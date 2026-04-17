import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import Dogs from '/src/assets/dogs.svg?react';
import { UserContext } from '../UserContext';
import { useContext } from 'react';

const Header = () => {
  const { data } = useContext(UserContext);

  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link className={styles.logo} to="/" aria-label="Dogs - Home">
          <Dogs />
        </Link>
        {data ? (
          <Link
            className={styles.login}
            to="/conta"
            aria-label="Dogs - Minha Conta"
          >
            {data.nome}
          </Link>
        ) : (
          <Link className={styles.login} to="/login" aria-label="Dogs - Login">
            Login / Criar
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
