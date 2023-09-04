import { Container, Button, Row, Col, FloatingLabel, Form } from "react-bootstrap";
export default function FormCadCategoria(props) {
    return (
        <Container>
            <Form>
                <Row>
                    <Col md={4}>
                        <Form.Group>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Categoria:"
                                className="mb-3"
                            >
                                <Form.Control type="text" placeholder="..." id="categoria" name="categoria" />
                            </FloatingLabel>
                            <Form.Control.Feedback type="invalid">Informe a categoria!</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col offset={5} className="d-flex justify-content-end">
                        <Button type="submit" variant={"info"}>Cadastrar</Button>
                    </Col>
                    <Col>
                        <Button type="submit" variant={"secondary"} onClick={() => {
                            props.exibirFormulario(false);
                        }}>Voltar</Button>
                    </Col>
                </Row>
            </Form>
        </Container>
    );
}