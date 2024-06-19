import Button from 'components/Button';
import styles from './Home.module.scss';
import TextInput from 'components/TextInput';
import ImageValidator from 'components/ImageValidator';
import images from 'data/images.json';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';


export default function Home() {
    const randomImage = images[Math.round(Math.random() * (images.length - 1))];
    const [codeValidator, setCodeValidator] = useState(randomImage.code);
    const navigate = useNavigate();

    function verifyCode(code: string): boolean {
        return code == codeValidator; 
    }

    return (
        <form 
            action='GET' 
            className={ styles.form }
            onSubmit={ (event) => { 
                event.preventDefault(); 
                const code: string = event.currentTarget.validator.value;
                const cep: string = event.currentTarget.cep.value;
                if (verifyCode(code)) {
                    navigate(`/search/${ cep }`);
                    return;
                }
                event.currentTarget.reset();
                event.currentTarget.cep.value = cep;
                event.currentTarget.validator.focus();
                alert('Código inválido! Tente novamente!');
            }}
        >
            <TextInput 
                id='cep' 
                description='Digite o seu CEP:' 
                placeholder='ex: 45000000'
                pattern='[0-9]{8}'
            />
            <ImageValidator image={ randomImage } />
            <TextInput 
                id='validator' 
                description='Digite o texto contido na imagem:' 
            />
            <Button description='Buscar' />
        </form>
    );
}