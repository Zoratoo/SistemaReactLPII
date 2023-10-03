import { useState } from "react";
import Pagina from "../templates/Pagina";
import TabelaProdutos from "./tabelas/TabelaProdutos";
import FormCadProduto from "./formularios/FormCadProduto";
import { Container } from "react-bootstrap";
import TelaMensagem from "./TelaMensagem";

export default function TelaCadastroProduto(props) {
    const [exibirFormulario, setExibirFormulario] = useState(0);
    const [listaProdutos, setListaProdutos] = useState([]);
    const [mostrarMensagem, setMostrarMensagem] = useState(false);
    const [mensagem, setMensagem] = useState("");
    const [tipoMensagem, setTipoMensagem] = useState("");
    const [produtoParaEdicao, setProdutoParaEdicao] = useState({
        nome: '',
        descricao: '',
        quantidade: '',
        preco: ''
    })
    const [modoEdicao, setModoEdicao] = useState(false);

    if (mostrarMensagem) {
        return (
            <TelaMensagem mensagem={mensagem} tipo={tipoMensagem} setMostrarMensagem={setMostrarMensagem} />
        );
    }
    else {
        return (
            <Container>
                <Pagina>
                    {
                        exibirFormulario ?
                            <FormCadProduto
                                exibirFormulario={setExibirFormulario}
                                listaProdutos={listaProdutos}
                                setListaProdutos={setListaProdutos}
                                produtoParaEdicao={produtoParaEdicao}
                                setProdutoParaEdicao={setProdutoParaEdicao}
                                modoEdicao={modoEdicao}
                                setModoEdicao={setModoEdicao}
                                setMostrarMensagem={setMostrarMensagem}
                                setMensagem={setMensagem}
                                setTipoMensagem={setTipoMensagem}
                            />
                            :
                            <TabelaProdutos
                                exibirFormulario={setExibirFormulario}
                                listaProdutos={listaProdutos}
                                setListaProdutos={setListaProdutos}
                                produtoParaEdicao={produtoParaEdicao}
                                setProdutoParaEdicao={setProdutoParaEdicao}
                                modoEdicao={modoEdicao}
                                setModoEdicao={setModoEdicao}
                            />
                    }
                </Pagina>
            </Container>

        );
    }
}