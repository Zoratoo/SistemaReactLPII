import { Alert } from "react-bootstrap"
import Pagina from "../templates/Pagina"
import { useEffect } from "react"

export default function TelaMensagem(props) {
    useEffect(()=>{
        setTimeout(()=>{
            props.setMostrarMensagem(false);
        },3000);
    },[]);
    return (
            <Pagina>
                <Alert variant={props.tipo} className="d-flex justify-content center">
                    <p>{props.mensagem}</p>
                </Alert>
            </Pagina>
    )
}