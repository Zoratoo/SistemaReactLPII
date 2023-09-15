import { useState } from "react";
import { Button, Container, Form, Row, Col, FloatingLabel } from "react-bootstrap";
export default function FormCadCliente(props) {
    const estadoInicialCliente = props.clienteParaEdicao;
    const [cliente, setCliente] = useState(estadoInicialCliente);
    const [formValidado, setFormValidado] = useState(false);

    function manipularMudancas(e) {
        const componente = e.currentTarget;
        setCliente({ ...cliente, [componente.name]: componente.value });
    }


    function manipularSubmissao(e) {
        console.log(cliente)
        const form = e.currentTarget;
        if (form.checkValidity()) {
            //todos os campos preenchidos
            //mandar os dados para o backend
            if (!props.modoEdicao) {
                props.setListaClientes([...props.listaClientes, cliente]);
            } else {
                //filtra e adiciona
                props.setListaClientes([...props.listaClientes.filter((itemCliente) => itemCliente.cpf !== cliente.cpf), cliente]);
                props.setModoEdicao(false);
                props.setClienteParaEdicao({
                    nome: '',
                    cpf: '',
                    estadoCivil: 'solteiro',
                    endereco: '',
                    numero: '',
                    bairro: '',
                    cidade: '',
                    uf: 'SP',
                    cep: ''
                });
            }
            setCliente(estadoInicialCliente);
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
                                label="Nome Completo:"
                                className="mb-3"
                            >
                                <Form.Control
                                    type="text"
                                    placeholder="Informe o nome completo"
                                    id="nome"
                                    name="nome"
                                    value={cliente.nome}
                                    onChange={manipularMudancas}
                                    required />
                            </FloatingLabel>
                            <Form.Control.Feedback type="invalid">Informe o nome!</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group>
                            <FloatingLabel
                                label="CPF:"
                                className="mb-3"
                            >

                                <Form.Control
                                    type="text"
                                    placeholder="000.000.000-00"
                                    id="cpf"
                                    name="cpf"
                                    value={cliente.cpf}
                                    onChange={manipularMudancas}
                                    required />
                            </FloatingLabel>
                            <Form.Control.Feedback type="invalid">Informe o cpf!</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                    <Col md={3}>
                        <FloatingLabel controlId="floatingSelect" label="Estado Civil:">
                            <Form.Select
                                aria-label="Estado civil"
                                id='estadoCivil'
                                name='estadoCivil'
                                onChange={manipularMudancas}
                                value={cliente.estadoCivil}
                                requerid>
                                <option value="Solteiro" selected>Solteiro</option>
                                <option value="Casado">Casado</option>
                                <option value="Separado">Separado</option>
                                <option value="Divorciado">Divorciado</option>
                                <option value="Viuvo">Viúvo</option>

                            </Form.Select>
                        </FloatingLabel>
                    </Col>
                </Row>
                <Row>
                    <Col md={10}>
                        <Form.Group>
                            <FloatingLabel
                                label="Endereço:"
                                className="mb-3"
                            >
                                <Form.Control
                                    type="text"
                                    placeholder="Avenida/Rua/Alameda/Viela ..."
                                    id="endereco"
                                    name="endereco"
                                    onChange={manipularMudancas}
                                    value={cliente.endereco}
                                    required
                                />
                            </FloatingLabel>
                            <Form.Control.Feedback type="invalid">Informe o endereço!</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                    <Col md={2}>
                        <Form.Group>
                            <FloatingLabel
                                label="Número"
                                className="mb-3"
                            >
                                <Form.Control
                                    type="text"
                                    placeholder="Nº"
                                    id="numero"
                                    name="numero"
                                    onChange={manipularMudancas}
                                    value={cliente.numero}
                                    required
                                />
                            </FloatingLabel>
                            <Form.Control.Feedback type="invalid">Informe o número!</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col md={4}>
                        <Form.Group>
                            <FloatingLabel
                                label="Bairro:"
                                className="mb-3"
                            >
                                <Form.Control
                                    type="text"
                                    placeholder="Bairro/Vila..."
                                    id="bairro"
                                    name="bairro"
                                    onChange={manipularMudancas}
                                    value={cliente.bairro}
                                    required
                                />
                            </FloatingLabel>
                            <Form.Control.Feedback type="invalid">Informe o bairro!</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                    <Col md={5}>
                        <Form.Group>
                            <FloatingLabel
                                label="Cidade"
                                className="mb-3"
                            >
                                <Form.Control
                                    type="text"
                                    placeholder="Cidade"
                                    id="cidade"
                                    name="cidade"
                                    onChange={manipularMudancas}
                                    value={cliente.cidade}
                                    required
                                />
                            </FloatingLabel>
                            <Form.Control.Feedback type="invalid">Informe a cidade!</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                    <Col md={3}>
                        <FloatingLabel controlId="floatingSelect" label="UF:">
                            <Form.Select
                                aria-label="Unidades Federativas brasileiras"
                                id='uf'
                                name='uf'
                                onChange={manipularMudancas}
                                value={cliente.uf}
                                requerid>
                                <option value="SP" selected>São Paulo</option>
                                <option value="AC">Acre</option>
                                <option value="AL">Alagoas</option>
                                <option value="AP">Amapá</option>
                                <option value="AM">Amazonas</option>
                                <option value="BA">Bahia</option>
                                <option value="CE">Ceará</option>
                                <option value="DF">Distrito Federal</option>
                                <option value="ES">Espírito Santo</option>
                                <option value="GO">Goiás</option>
                                <option value="MA">Maranhão</option>
                                <option value="MT">Mato Grosso</option>
                                <option value="MS">Mato Grosso do Sul</option>
                                <option value="MG">Minas Gerais</option>
                                <option value="PA">Pará</option>
                                <option value="PB">Paraíba</option>
                                <option value="PR">Paraná</option>
                                <option value="PE">Pernambuco</option>
                                <option value="PI">Piauí</option>
                                <option value="RJ">Rio de Janeiro</option>
                                <option value="RN">Rio Grande do Norte</option>
                                <option value="RS">Rio Grande do Sul</option>
                                <option value="RO">Rondônia</option>
                                <option value="RR">Roraima</option>
                                <option value="SC">Santa Catarina</option>
                                <option value="SE">Sergipe</option>
                                <option value="TO">Tocantins</option>
                            </Form.Select>
                        </FloatingLabel>
                    </Col>
                </Row>
                <Row>
                    <Col md={4}>
                        <Form.Group>
                            <FloatingLabel
                                label="CEP:"
                                className="mb-3"
                            >
                                <Form.Control
                                    type="text"
                                    placeholder="00000-000"
                                    id="cep"
                                    name="cep"
                                    onChange={manipularMudancas}
                                    value={cliente.cep}
                                    required
                                />
                            </FloatingLabel>
                            <Form.Control.Feedback type="invalid">Informe o bairro!</Form.Control.Feedback>
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