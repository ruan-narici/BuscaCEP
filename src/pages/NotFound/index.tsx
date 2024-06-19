import styles from './NotFound.module.scss';
import Image from 'assets/bad_face.png';
import { useNavigate } from 'react-router-dom';


export default function NotFound() {
  const navigate = useNavigate();
  return (
    <>
      <button
        className={ styles.back } 
        onClick={ () => navigate(-1) }
      >
        { '< Voltar' }
      </button>
      <section className={ styles.section }>
        <img 
          className={ styles.section__image } 
          src={ Image } 
          alt="Página não encontrada!" 
        />
        <h1 className={ styles.section__code_error }>404</h1>
        <h2>Página não encontrada!</h2>
      </section>
    </>
  );
}