import {Container, Table, Button} from "react-bootstrap";
export default function TabelaClientes(props) {
    return (
        <Container>
            <Button type="button">Novo Cliente</Button>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>CPF</th>
                        <th>Nome Completo</th>
                        <th>Endereço</th>
                        <th>Cidade/UF</th>
                        <th>CEP</th>
                        <th>Bairro</th>
                        <th>Numero</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>000.000.000-00</td>
                        <td>João da Silva</td>
                        <td>Rua X</td>
                        <td>Presidente Prudente/SP</td>
                        <td>19019-000</td>
                        <td>Vila Nova</td>
                        <td>15</td>
                    </tr>
                </tbody>
            </Table>
        </Container>
    );
}