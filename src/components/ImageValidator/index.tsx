import { Image } from 'types/Image';


export default function ImageValidator(props: { image: Image }) {
    return (
        <>
            <img src={props.image.path} alt='Code validator' />
        </>
    );
}