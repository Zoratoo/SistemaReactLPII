import TelaCadastroCategoria from './telasCadastro/TelaCadastroCategoria.jsx';
import TelaCadastroCliente from './telasCadastro/TelaCadastroCliente.jsx';
import TelaCadastroFornecedor from './telasCadastro/TelaCadastroFornecedor.jsx';
import TelaCadastroProduto from './telasCadastro/TelaCadastroProduto.jsx';
import FormCadCategoria from './telasCadastro/formularios/FormCadCategoria.jsx';
import FormCadCliente from './telasCadastro/formularios/FormCadCliente.jsx';
import FormCadFornecedor from './telasCadastro/formularios/FormCadFornecedor.jsx';
import FormCadProduto from './telasCadastro/formularios/FormCadProduto.jsx';
//import Pagina from './templates/Pagina.jsx';
function App() {
  return (
    <div className="App">
      <TelaCadastroCliente />
      <FormCadCliente />
      <TelaCadastroFornecedor />
      <FormCadFornecedor />
      <TelaCadastroProduto />
      <FormCadProduto />
      <TelaCadastroCategoria />
      <FormCadCategoria />
    </div>
  );
}

export default App;


