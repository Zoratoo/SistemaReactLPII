import { useState } from "react";
import Pagina from "../templates/Pagina";
import TabelaProdutos from "./tabelas/TabelaProdutos";
import FormCadProduto from "./formularios/FormCadProduto";
import { Container } from "react-bootstrap";

export default function TelaCadastroProduto(props) {
    const [exibirFormulario, setExibirFormulario] = useState(0);

    return (
        <Container>
            <Pagina>
                {
                    exibirFormulario ? <FormCadProduto exibirFormulario={setExibirFormulario}/> : <TabelaProdutos exibirFormulario={setExibirFormulario}/>
                }
            </Pagina>
        </Container>

    );
}