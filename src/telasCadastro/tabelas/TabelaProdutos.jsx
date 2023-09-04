import { Container, Button, Table } from "react-bootstrap";
export default function TabelaProdutos(props) {
    return (
        <Container>
            <Button type="button" onClick={() => {
                props.exibirFormulario(true);
            }}>Novo Produto</Button>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Descrição</th>
                        <th>Quantidade</th>
                        <th>Preço (R$)</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>Camiseta</td>
                        <td>Vestimenta</td>
                        <td>12</td>
                        <td>39,90</td>
                    </tr>
                </tbody>
            </Table>
        </Container>
    );
}