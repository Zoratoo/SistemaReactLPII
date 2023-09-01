import Pagina from "../templates/Pagina";
import FormCadCliente from "./formularios/FormCadCliente";
import TabelaClientes from "./tabelas/TabelaClientes";
import { useState } from "react";

export default function TelaCadastroCliente(props){
    const [exibirFormulario, setExibirFormulario] = useState(false);
    return(
        <Pagina>
            {
                exibirFormulario?<FormCadCliente/>:<TabelaClientes/>
            }
            
        </Pagina>
    );
}