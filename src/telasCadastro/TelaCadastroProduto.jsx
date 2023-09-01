import { useState } from "react";
import Pagina from "../templates/Pagina";

import TabelaProdutos from "./tabelas/TabelaProdutos";
import FormCadProduto from "./formularios/FormCadProduto";
export default function TelaCadastroProduto(props) {
    const [exibirFormulario, setExibirFormulario] = useState(0);

    return (
        <Pagina>
            {
                exibirFormulario?<FormCadProduto/>:<TabelaProdutos/>
            }
        </Pagina>
    );
}