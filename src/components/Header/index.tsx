import { ReactComponent as Logo } from 'assets/logo.svg';
import styles from './Header.module.scss';


export default function Header() {
  return (
    <header className={ styles.header }>
      <h1 className={ styles.header__title }>
                Busca Cep
      </h1>
      <Logo />
    </header>
  );
}