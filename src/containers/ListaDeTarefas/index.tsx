import { useSelector } from 'react-redux'
import Tarefa from '../../components/Tarefa'
import { Titulo } from '../../components/Tarefa/styles'
import { Container } from './styles'
import { RootReducer } from '../../store'

const ListaDeTarefas = () => {
  const { itens } = useSelector((state: RootReducer) => state.tarefas)
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  const filtraTarefas = () => {
    return itens.filter(
      (item) => item.titulo.toLowerCase().search(termo.toLowerCase()) >= 0
    )
  }

  return (
    <Container>
      <p>
        2 Tarefas marcadas como: &quot;Categoria&quot; e &quot;{termo}&quot;
      </p>
      <ul>
        {filtraTarefas().map((tarefa) => (
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
