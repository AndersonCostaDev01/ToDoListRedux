import { useSelector } from 'react-redux'
import Tarefa from '../../components/Tarefa'
import { Titulo } from '../../components/Tarefa/styles'
import { Container } from './styles'
import { RootReducer } from '../../store'

const ListaDeTarefas = () => {
  const { tarefas } = useSelector((state: RootReducer) => state)
  return (
    <Container>
      <p>2 Tarefas marcadas como: &quot;Categoria&quot; e &quot;Termo&quot;</p>
      <ul>
        {tarefas.map((tarefa) => (
          <li key={tarefa.titulo}>
            <Titulo>{tarefa.titulo}</Titulo>
            <Tarefa
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
