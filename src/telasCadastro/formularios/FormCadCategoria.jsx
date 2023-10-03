import { Container, Button, Row, Col, FloatingLabel, Form } from "react-bootstrap";
import { useState } from "react";
export default function FormCadCategoria(props) {
    const estadoInicialCategoria = props.categoriaParaEdicao;
    const [categoria, setCategoria] = useState(estadoInicialCategoria);
    const [formValidado, setFormValidado] = useState(false);
    const categoriaVazia = {
        nome: ''
    }

    function manipularMudancas(e) {
        const componente = e.currentTarget;
        setCategoria({ ...categoria, [componente.name]: componente.value });
    }

    function manipularSubmissao(e) {
        const form = e.currentTarget;
        if (form.checkValidity()) {
            if (!props.modoEdicao) {
                // Adicione a nova categoria à lista de categorias
                props.setListaCategorias([...props.listaCategorias, categoria]);
                props.setMensagem('Categoria incluída com sucesso');
                props.setTipoMensagem('success');
                props.setMostrarMensagem(true);
            } else {
                // Atualize a categoria existente na lista de categorias
                const novaListaCategorias = props.listaCategorias.map((itemCateg) => {
                    if (itemCateg.nome === props.categoriaParaEdicao.nome) {
                        return categoria; // Substitua a categoria antiga pela nova
                    }
                    return itemCateg;
                });
                props.setListaCategorias(novaListaCategorias);
                props.setModoEdicao(false);
                props.setCategoriaParaEdicao(categoriaVazia);
            }
            setCategoria(categoriaVazia);
            setFormValidado(false);
        } else {
            setFormValidado(true);
        }
    
        e.stopPropagation();
        e.preventDefault();
    }
    
    

    return (
        <Container>
            <Form noValidate validated={formValidado} onSubmit={manipularSubmissao}>
                <Row>
                    <Col md={4}>
                        <Form.Group>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Categoria:"
                                className="mb-3"
                            >
                                <Form.Control type="text" placeholder="..." id="nome" name="nome"
                                    value={categoria.nome}
                                    onChange={manipularMudancas}
                                    required />
                            </FloatingLabel>
                            <Form.Control.Feedback type="invalid">Informe a categoria!</Form.Control.Feedback>
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