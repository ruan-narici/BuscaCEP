import styles from './Button.module.scss';

interface Props {
    description: string
    callback?: () => void
}

export default function Button({ description, callback = undefined }: Props) {
  return (
    <button 
      className={ styles.button }
      onClick={ callback }
    >
      { description }
    </button>
  );
}