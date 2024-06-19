import { Address } from 'types/Address';
import styles from './Table.module.scss';
import TbodySuccess from './TbodySuccess';
import TbodyError from './TbodyError';


interface Props {
    data: Address | undefined
}

export default function Table({ data }: Props) {
  return (
    <table className={ styles.table }>
      <thead className={ styles.table__header }>
        <tr>
          <th>Logradouro/Nome</th>
          <th>Bairro/Distrito</th>
          <th>Localidade/UF</th>
          <th>CEP</th>
        </tr>
      </thead>
      { data === undefined || data.erro ? <TbodyError data={ data } /> : <TbodySuccess data={ data } /> }
    </table>
  );
}