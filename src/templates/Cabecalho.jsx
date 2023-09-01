import Alert from 'react-bootstrap/Alert';
//Componente que deve receber um prooriedade conteúdo
//
export default function Cabecalho(props){

    return (
        <Alert variant="dark" className={'text-center'}>
            {props.conteudo || "sistema"}
        </Alert>
    );
}