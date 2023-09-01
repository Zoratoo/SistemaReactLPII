import { Container } from "react-bootstrap";
import { useState } from "react";
import TabelaCategorias from "./tabelas/TabelaCategorias";
import FormCadCategoria from "./formularios/FormCadCategoria";
export default function TelaCadastroCategoria(props){
    const [exibirFormulario, setExibirFormulario] = useState(0);
    return(
        <Container>
            {
                exibirFormulario?<FormCadCategoria/>:<TabelaCategorias/>
            }
        </Container>
    );
}