import Pagina from "../templates/Pagina";
import TelaMensagem from "./TelaMensagem";
import FormCadCliente from "./formularios/FormCadCliente";
import TabelaClientes from "./tabelas/TabelaClientes";
import { useState } from "react";
import { Container } from "react-bootstrap";

export default function TelaCadastroCliente(props) {
    const [exibirFormulario, setExibirFormulario] = useState(false);
    const [listaClientes, setListaClientes] = useState([]);
    const [mostrarMensagem, setMostrarMensagem] = useState(false);
    const [mensagem, setMensagem] = useState("");
    const [tipoMensagem, setTipoMensagem] = useState("");
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

    if (mostrarMensagem) {
        return (
            <TelaMensagem mensagem={mensagem} tipo={tipoMensagem} setMostrarMensagem={setMostrarMensagem}/>
        );
    }
    else {
        return (
            <Container>
                <Pagina> {
                    exibirFormulario ?
                        <FormCadCliente
                            exibirFormulario={setExibirFormulario}
                            listaClientes={listaClientes}
                            setListaClientes={setListaClientes}
                            clienteParaEdicao={clienteParaEdicao}
                            setClienteParaEdicao={setClienteParaEdicao}
                            modoEdicao={modoEdicao}
                            setModoEdicao={setModoEdicao}
                            setMostrarMensagem={setMostrarMensagem}
                            setMensagem={setMensagem}
                            setTipoMensagem={setTipoMensagem}
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
}