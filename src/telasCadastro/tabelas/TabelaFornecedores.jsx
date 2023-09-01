import { Container, Table, Button } from "react-bootstrap";

export default function TabelaFornecedores(props){
    return(
        <Container>
            <Button type="button">Novo Fornecedor</Button>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>CNPJ</th>
                        <th>E-mail</th>
                        <th>Telefone</th>
                        <th>Endereço</th>
                        <th>Bairro</th>
                        <th>N°</th>
                        <th>CEP</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>NIKE</td>
                        <td>11.111.111/0000-11</td>
                        <td>nike@nike.com</td>
                        <td>(01)1000-0000</td>
                        <td>Rua Fiorino, 24</td>
                        <td>24</td>
                        <td>00000-000</td>
                    </tr>
                </tbody>
            </Table>
        </Container>
    );
}