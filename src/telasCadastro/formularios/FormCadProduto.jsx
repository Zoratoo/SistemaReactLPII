import { Col, Container, FloatingLabel, Form, Row, Button } from "react-bootstrap";
export default function FormCadProduto(props) {
    return (
        <Container>
            <Form>
                <Row>
                    <Col>
                        <Form.Group>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Nome:"
                                className="mb-3"
                            >
                                <Form.Control type="text" placeholder="" id="nome" name="nome" />
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
                                <Form.Control type="text" placeholder="" id="nome" name="nome" />
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
                                <Form.Control type="text" placeholder="000" id="qtd" name="qtd  "/>
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
                                <Form.Control type="text" placeholder="00,00" id="preco" name="preco" />
                            </FloatingLabel>
                        </Form.Group>
                    </Col>
                </Row>

                <Row>
                    <Col offset={5} className="d-flex justify-content-end">
                        <Button type="submit" variant={"info"}>Cadastrar</Button>
                    </Col>
                    <Col>
                      <Button type="submit" variant={"secondary"}>Voltar</Button>
                    </Col>
                </Row>
            </Form>
        </Container>
    );
}