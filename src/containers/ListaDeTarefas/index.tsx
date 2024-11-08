import Tarefa from '../../components/FiltroCard/Tarefa'
import { Container } from './styles'

const ListaDeTarefas = () => {
  return (
    <Container>
      <p>2 Tarefas marcadas como: &quot;Categoria&quot; e &quot;Termo&quot;</p>
      <ul>
        <li>
          <Tarefa />
        </li>
        <li>
          <Tarefa />
        </li>
        <li>
          <Tarefa />
        </li>
        <li>
          <Tarefa />
        </li>
        <li>
          <Tarefa />
        </li>
        <li>
          <Tarefa />
        </li>
      </ul>
    </Container>
  )
}

export default ListaDeTarefas
