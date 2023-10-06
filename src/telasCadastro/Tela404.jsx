import { Container, Alert } from "react-bootstrap"
import Pagina from "../templates/Pagina"

export default function Tela404(props){
    return(
        <Container>
            <Pagina>
                <Alert variant="danger" style={{textAlign: 'center'}}>O sistema não oferece acesso a esta página.</Alert>
            </Pagina>
        </Container>
    )
}