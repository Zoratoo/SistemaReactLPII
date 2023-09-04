import { useState } from "react";
import Pagina from "../templates/Pagina";
import FormCadFornecedor from "./formularios/FormCadFornecedor";
import TabelaFornecedores from "./tabelas/TabelaFornecedores";
import { Container } from "react-bootstrap";

export default function TelaCadastroFornecedor(props) {
    const [exibirFormulario, setExibirFormulario] = useState(0);

    return (
        <Container>
            <Pagina>
                {
                    exibirFormulario ? <FormCadFornecedor exibirFormulario={setExibirFormulario}/> : <TabelaFornecedores exibirFormulario={setExibirFormulario}/>
                }
            </Pagina>
        </Container>
    );
}