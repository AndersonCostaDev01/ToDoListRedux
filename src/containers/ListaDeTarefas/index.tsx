import Tarefa from '../../components/FiltroCard/Tarefa'
import { Titulo } from '../../components/FiltroCard/Tarefa/styles'
import { Container } from './styles'

const Tarefas = [
  {
    titulo: 'Estudar Typescript',
    prioridade: 'Urgente',
    status: 'Pendente',
    descricao: 'Estudar Typescript para atividade da semana'
  },
  {
    titulo: 'Estudar React',
    prioridade: 'Urgente',
    status: 'Concluida',
    descricao: 'Estudar React para atividade da semana'
  },
  {
    titulo: 'Exame medico',
    prioridade: 'Normal',
    status: 'Pendente',
    descricao: 'Exame medico para saber sobre estado de saude'
  }
]

const ListaDeTarefas = () => {
  return (
    <Container>
      <p>2 Tarefas marcadas como: &quot;Categoria&quot; e &quot;Termo&quot;</p>
      <ul>
        {Tarefas.map((tarefa) => (
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
