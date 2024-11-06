import BarraLateral from './containers/BarraLateral'
import ListaDeTarefas from './containers/BarraLateral/ListaDeTarefas'
import EstiloGlobal, { Container } from './styles'

function App() {
  return (
    <>
      <EstiloGlobal /> {/* IMportação dos estilos Globais */}
      <Container>
        {' '}
        {/* Abertura do container principal da aplicação */}
        <BarraLateral /> {/* Barra Lateral da aplicação */}
        <ListaDeTarefas /> {/* Lista de Tarefas da aplicação */}
      </Container>{' '}
      {/* Fechamento do container principal da aplicação */}
    </>
  )
}

export default App
