import { useSelector } from 'react-redux'
import Tarefa from '../../components/Tarefa'
import { Titulo } from '../../components/Tarefa/styles'
import { Container } from './styles'
import { RootReducer } from '../../store'

const ListaDeTarefas = () => {
  const { itens } = useSelector((state: RootReducer) => state.tarefas)
  return (
    <Container>
      <p>2 Tarefas marcadas como: &quot;Categoria&quot; e &quot;Termo&quot;</p>
      <ul>
        {itens.map((tarefa) => (
          <li key={tarefa.titulo}>
            <Titulo>{tarefa.titulo}</Titulo>
            <Tarefa
              id={tarefa.id}
              prioridade={tarefa.prioridade}
              status={tarefa.status}
              titulo={tarefa.titulo}
              descricao={tarefa.descricao}
            />
          </li>
        ))}
      </ul>
    </Container>
  )
}

export default ListaDeTarefas
