import { Container, Table, Button } from "react-bootstrap";
export default function TabelaClientes(props) {
    return (
        <Container>
            <Button type="button" onClick={() => {
                props.exibirFormulario(true);
            }}>Novo Cliente</Button>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Nome Completo</th>
                        <th>CPF</th>
                        <th>Estado Civil</th>
                        <th>Endereço</th>
                        <th>Cidade/UF</th>
                        <th>CEP</th>
                        <th>Bairro</th>
                        <th>Numero</th>
                    </tr>
                </thead>
                <tbody>
                    {props.listaClientes.map((cliente, index) => (
                        <tr key={index}>
                            <td>{cliente.nome}</td>
                            <td>{cliente.cpf}</td>
                            <td>{cliente.estadoCivil}</td>
                            <td>{cliente.endereco}</td>
                            <td>{cliente.cidade}/{cliente.uf}</td>
                            <td>{cliente.cep}</td>
                            <td>{cliente.bairro}</td>
                            <td>{cliente.numero}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    );
}