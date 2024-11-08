import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Tarefa from '../../models/Tarefa'
import * as enums from '../../utils/enums/Tarefas'

const tarefasSlice = createSlice({
  name: 'tarefas',
  initialState: [
    new Tarefa(
      'Estudar Typescript',
      enums.Prioridade.URGENTE,
      enums.Status.PENDENTE,
      'Estudar Typescript para atividade da semana',
      1
    ),
    new Tarefa(
      'Estudar React',
      enums.Prioridade.URGENTE,
      enums.Status.CONCLUIDA,
      'Estudar React para atividade da semana',
      2
    ),
    new Tarefa(
      'Exame medico',
      enums.Prioridade.NORMAL,
      enums.Status.PENDENTE,
      'Exame medico para saber sobre estado de saude',
      3
    )
  ] as Tarefa[],
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state = state.filter((tarefa) => tarefa.id !== action.payload)
    }
  }
})

export const { remover } = tarefasSlice.actions
export default tarefasSlice.reducer
