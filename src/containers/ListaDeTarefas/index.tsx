import Tarefa from '../../components/Tarefa'
import { Titulo } from '../../components/Tarefa/styles'
import { Container } from './styles'
import * as enums from '../../utils/enums/Tarefas'

const Tarefas = [
  {
    titulo: 'Estudar Typescript',
    prioridade: enums.Prioridade.URGENTE,
    status: enums.Status.PENDENTE,
    descricao: 'Estudar Typescript para atividade da semana'
  },
  {
    titulo: 'Estudar React',
    prioridade: enums.Prioridade.URGENTE,
    status: enums.Status.CONCLUIDA,
    descricao: 'Estudar React para atividade da semana'
  },
  {
    titulo: 'Exame medico',
    prioridade: enums.Prioridade.NORMAL,
    status: enums.Status.PENDENTE,
    descricao: 'Exame medico para saber sobre estado de saude'
  },
  {
    titulo: 'Estudar React',
    prioridade: enums.Prioridade.NORMAL,
    status: enums.Status.CONCLUIDA,
    descricao: 'Estudar React para atividade da semana'
  },
  {
    titulo: 'Sair com os amigos',
    prioridade: enums.Prioridade.NORMAL,
    status: enums.Status.PENDENTE,
    descricao: 'Sair com os amigos para atividade em grups'
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
