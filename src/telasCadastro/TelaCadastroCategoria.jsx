import { Container } from "react-bootstrap";
import { useState } from "react";
import TabelaCategorias from "./tabelas/TabelaCategorias";
import FormCadCategoria from "./formularios/FormCadCategoria";
import Pagina from "../templates/Pagina";

export default function TelaCadastroCategoria(props){
    const [exibirFormulario, setExibirFormulario] = useState(false);
    return(
        <Container>
            <Pagina>
            {
                exibirFormulario?<FormCadCategoria exibirFormulario={setExibirFormulario}/>:<TabelaCategorias exibirFormulario={setExibirFormulario}/>
            }
            </Pagina>
        </Container>
    );
}