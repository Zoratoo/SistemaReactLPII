import Pagina from "../templates/Pagina";
import FormCadCliente from "./formularios/FormCadCliente";
import TabelaClientes from "./tabelas/TabelaClientes";
import { useState } from "react";
import { Container } from "react-bootstrap";

export default function TelaCadastroCliente(props) {
    const [exibirFormulario, setExibirFormulario] = useState(false);
    const [listaClientes, setListaClientes] = useState([]);
    const [clienteParaEdicao, setClienteParaEdicao] = useState({
        nome: '',
        cpf: '',
        estadoCivil: 'solteiro',
        endereco: '',
        numero: '',
        bairro: '',
        cidade: '',
        uf: 'SP',
        cep: ''
    })
    const [modoEdicao, setModoEdicao] = useState(false);


    return (
        <Container>
            <Pagina>
                {
                    exibirFormulario ?
                        <FormCadCliente
                            exibirFormulario={setExibirFormulario}
                            listaClientes={listaClientes}
                            setListaClientes={setListaClientes}
                            clienteParaEdicao={clienteParaEdicao}
                            setClienteParaEdicao={setClienteParaEdicao}
                            modoEdicao={modoEdicao}
                            setModoEdicao={setModoEdicao}
                        />
                        :
                        <TabelaClientes
                            exibirFormulario={setExibirFormulario}
                            listaClientes={listaClientes}
                            setListaClientes={setListaClientes}
                            clienteParaEdicao={clienteParaEdicao}
                            setClienteParaEdicao={setClienteParaEdicao}
                            modoEdicao={modoEdicao}
                            setModoEdicao={setModoEdicao}
                        />
                }
            </Pagina>
        </Container>
    );
}