import { useSelector } from 'react-redux'
import Tarefa from '../../components/Tarefa'
import { Titulo } from '../../components/Tarefa/styles'
import { MainContainer as Container, Titulo as Resultado } from '../../styles'
import { RootReducer } from '../../store'

const ListaDeTarefas = () => {
  const { itens } = useSelector((state: RootReducer) => state.tarefas)
  const { termo, criterio, valor } = useSelector(
    (state: RootReducer) => state.filtro
  )

  const filtraTarefas = () => {
    let tarefasFiltradas = [...itens]

    if (termo) {
      tarefasFiltradas = tarefasFiltradas.filter((item) =>
        item.titulo.toLowerCase().includes(termo.toLowerCase())
      )
    }

    if (criterio === 'prioridade') {
      tarefasFiltradas = tarefasFiltradas.filter(
        (item) => item.prioridade === valor
      )
    } else if (criterio === 'status') {
      tarefasFiltradas = tarefasFiltradas.filter(
        (item) => item.status === valor
      )
    }

    return tarefasFiltradas
  }

  const tarefas = filtraTarefas()

  const verificarAtivo = () => {
    if (criterio === 'todas') {
      return (
        <>
          {tarefas.length} Tarefa(s) marcada(s) como: {`"${criterio}"`}{' '}
          {termo && `com o termo "${termo}"`}
        </>
      )
    } else {
      return (
        <>
          {tarefas.length} Tarefa(s) marcada(s) como:{' '}
          {`"${criterio}: ${valor}"`} {termo && `com o termo "${termo}"`}
        </>
      )
    }
  }

  return (
    <Container>
      <Resultado as="p">{verificarAtivo()}</Resultado>

      <ul>
        {tarefas.map((tarefa) => (
          <li key={tarefa.id}>
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
