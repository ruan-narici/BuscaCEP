import { Address } from 'types/Address';
import styles from './TbodySuccess.module.scss';


interface Props {
    data: Address | undefined
}

export default function TbodySuccess({ data }: Props) {
    return (
        <tbody className={ styles.tbody }>
            <tr>
                <td>{ data?.logradouro }</td>
                <td>{ data?.bairro }</td>
                <td>{ data?.localidade }/{ data?.uf }</td>
                <td>{ data?.cep }</td>
            </tr>
        </tbody>
    );
}