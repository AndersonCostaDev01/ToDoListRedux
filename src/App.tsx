import { Provider } from 'react-redux'
import BarraLateral from './containers/BarraLateral'
import ListaDeTarefas from './containers/ListaDeTarefas'
import EstiloGlobal, { Container } from './styles'
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <EstiloGlobal /> {/* IMportação dos estilos Globais */}
      <Container>
        {' '}
        {/* Abertura do container principal da aplicação */}
        <BarraLateral /> {/* Barra Lateral da aplicação */}
        <ListaDeTarefas /> {/* Lista de Tarefas da aplicação */}
      </Container>{' '}
      {/* Fechamento do container principal da aplicação */}
    </Provider>
  )
}

export default App
