export default function Rodape(props) {
    return (
        <footer>
            <div style={{
                position: 'fixed',
                bottom: 0,
                left: 0,
                right: 0,
                backgroundColor: 'white', 
                borderTop: '1px solid black',
                padding: '5px',
                borderRadius: '5px',
                margin: '3px',
                }}>
                <p>{props.conteudo||"Rodapé do sistema."}</p>
            </div>
        </footer>
    );
}