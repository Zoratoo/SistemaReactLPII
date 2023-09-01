import { useState } from "react";
import Pagina from "../templates/Pagina";
import FormCadFornecedor from "./formularios/FormCadFornecedor";
import TabelaFornecedores from "./tabelas/TabelaFornecedores";
export default function TelaCadastroFornecedor(props) {
    const [exibirFormulario, setExibirFormulario] = useState(0);

    return (
        <Pagina>
            {
                exibirFormulario?<FormCadFornecedor/>:<TabelaFornecedores/>
            }
        </Pagina>
    );
}