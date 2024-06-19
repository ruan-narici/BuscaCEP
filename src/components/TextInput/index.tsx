import styles from './TextInput.module.scss';


interface Props {
    id: string,
    description: string,
    placeholder?: string | undefined,
    pattern?: string | undefined,
}

export default function TextInput({ id, description,  placeholder = undefined, pattern = undefined }: Props) {
    return (
        <fieldset className={ styles.fieldset }>
            <label 
                className={ styles.fieldset__legend } 
                htmlFor={ id }
            >
                { description } 
                <span>*</span>
            </label>
            <input 
                type="text" 
                id={ id }  
                name={ id }
                className={ styles.fieldset__input }
                placeholder={ placeholder }
                pattern={ pattern }
                required
            />
        </fieldset>
    );
}