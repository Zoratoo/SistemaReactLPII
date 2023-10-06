import { Col, Container, FloatingLabel, Form, Row, Button } from "react-bootstrap";
import { useState } from "react";
export default function FormCadProduto(props) {
    const estadoInicialProduto = props.produtoParaEdicao;
    const [produto, setProduto] = useState(estadoInicialProduto);
    const [formValidado, setFormValidado] = useState(false);
    const produtoVazio = {
        nome: '',
        descricao: '',
        quantidade: '',
        preco: ''
    }

    function manipularMudancas(e) {
        const componente = e.currentTarget;
        setProduto({ ...produto, [componente.name]: componente.value });
    }

    function manipularSubmissao(e) {
        const form = e.currentTarget;
        if (form.checkValidity()) {
            if (!props.modoEdicao) {
                props.setListaProdutos([...props.listaProdutos, produto]);
                props.setMensagem('Produto incluído com sucesso');
                props.setTipoMensagem('success');
                props.setMostrarMensagem(true);
                setProduto(produtoVazio);
            }
            else {
                if(window.confirm('Deseja realmente alterar este produto?')) {
                    props.setListaProdutos([...props.listaProdutos.filter((itemProd) => itemProd.nome !== itemProd.nome), produto]);
                    props.setMensagem('Produto alterado com sucesso');
                    props.setTipoMensagem('success');
                    props.setMostrarMensagem(true);
                    props.setModoEdicao(false);
                    props.setProdutoParaEdicao(produtoVazio);
                    setProduto(produtoVazio);
                }
            }
            setFormValidado(false);
        }
        else {
            setFormValidado(true);
        }

        e.stopPropagation();
        e.preventDefault();
    }

    return (
        <Container>
            <Form noValidate validated={formValidado} onSubmit={manipularSubmissao}>
                <Row>
                    <Col>
                        <Form.Group>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Nome:"
                                className="mb-3"
                            >
                                <Form.Control type="text" placeholder="" id="nome" name="nome" value={produto.nome}
                                    onChange={manipularMudancas}
                                    required />
                            </FloatingLabel>
                        </Form.Group>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Form.Group>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Descrição:"
                                className="mb-3"
                            >
                                <Form.Control type="text" placeholder="" id="descricao" name="descricao" value={produto.descricao}
                                    onChange={manipularMudancas}
                                    required />
                            </FloatingLabel>
                        </Form.Group>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Form.Group>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Quantidade:"
                                className="mb-3"
                            >
                                <Form.Control type="text" placeholder="000" id="quantidade" name="quantidade"
                                    value={produto.quantidade}
                                    onChange={manipularMudancas}
                                    required />
                            </FloatingLabel>
                        </Form.Group>
                    </Col>

                    <Col>
                        <Form.Group>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Preço:"
                                className="mb-3"
                            >
                                <Form.Control type="text" placeholder="00,00" id="preco" name="preco"
                                    value={produto.preco}
                                    onChange={manipularMudancas}
                                    required />
                            </FloatingLabel>
                        </Form.Group>
                    </Col>
                </Row>

                <Row>
                    <Col md={6} offset={5} className="d-flex justify-content-end">
                        <Button type="submit" variant={"primary"} onClick={() => {
                        }}>{props.modoEdicao ? "Alterar" : "Cadastrar"}</Button>
                    </Col>
                    <Col md={6} offset={5}>
                        <Button type="button" variant={"secondary"} onClick={() => {
                            props.exibirFormulario(false);
                        }}>Voltar</Button>
                    </Col>
                </Row>
            </Form>
        </Container>
    );
}