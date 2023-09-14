import Pagina from "../templates/Pagina";
import FormCadCliente from "./formularios/FormCadCliente";
import TabelaClientes from "./tabelas/TabelaClientes";
import { useState } from "react";
import { Container } from "react-bootstrap";

export default function TelaCadastroCliente(props) {
    const [exibirFormulario, setExibirFormulario] = useState(false);
    const [listaClientes, setListaClientes] = useState([]);

    function adicionarCliente(cliente) {
        setListaClientes([...listaClientes, cliente]);
      }

    return (
        <Container>
            <Pagina>
                {
                    exibirFormulario ? <FormCadCliente exibirFormulario={setExibirFormulario} adicionarCliente={adicionarCliente}/> : <TabelaClientes exibirFormulario={setExibirFormulario} listaClientes={listaClientes}/>
                }
            </Pagina>
        </Container>
    );
}