import {Container, Table, Button} from "react-bootstrap";
export default function TabelaCategorias(props) {
    return (
        <Container>
            <Button type="button">Nova Categoria</Button>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Categoria</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Infantil</td>
                    </tr>
                </tbody>
            </Table>
        </Container>
    );
}