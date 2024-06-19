import { Address } from 'types/Address';
import styles from './TbodyError.module.scss';


interface Props {
    data: Address | undefined
}

export default function TbodyError({ data }: Props) {
  return (
    <tbody className={ styles.tbody }>
      <tr>
        <td>{ data === undefined ? 'CEP inválido' : data.erro ? 'Nenhum endereço foi encontrado' : '' }</td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
    </tbody>
  );
}