import Table from 'components/Table';
import styles from './Search.module.scss';
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Button from 'components/Button';


export default function Search() {
  const [address, setAddress] = useState();
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    async function getAddress() {
      const url = `https://viacep.com.br/ws/${ params.cep }/json/`;
      try {
        const request = await fetch(url);
        const response = await request.json();
        setAddress(response);
      } catch {
        setAddress(undefined);
      }
    }
        
    getAddress();
  }, []);

  return (
    <section className={ styles.section }>
      <h1 className={ styles.section__title }>Resultado da busca por CEP</h1>
      <Table data={ address } />
      <Button 
        description='Nova Busca'
        callback={ () => { navigate('/'); } }
      />
    </section>
  );
}