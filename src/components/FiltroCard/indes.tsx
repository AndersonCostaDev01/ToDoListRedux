import { useDispatch, useSelector } from 'react-redux'
import * as S from './styles'
import { RootReducer } from '../../store'
import { alterarFiltro } from '../../store/reducers/filtro'
import * as enums from '../../utils/enums/Tarefas'

export type props = {
  legenda: string
  criterio: 'prioridade' | 'status' | 'todas'
  valor?: enums.Prioridade | enums.Status
}

const FiltroCard = (props: props) => {
  const dispatch = useDispatch()
  const { filtro, tarefas } = useSelector((state: RootReducer) => state)

  const verificarAtivo = () => {
    const mesmoCriterio = filtro.criterio === props.criterio
    const mesmoValor = filtro.valor === props.valor

    return mesmoCriterio && mesmoValor
  }

  const contaTarefas = () => {
    if (props.criterio === 'todas') return tarefas.itens.length
    if (props.criterio === 'prioridade') {
      return tarefas.itens.filter((item) => item.prioridade === props.valor)
        .length
    }
    if (props.criterio === 'status') {
      return tarefas.itens.filter((item) => item.status === props.valor).length
    }
  }

  const filtrar = () => {
    dispatch(
      alterarFiltro({
        criterio: props.criterio,
        valor: props.valor
      })
    )
  }
  const ativo = verificarAtivo()
  const contador = contaTarefas()

  return (
    <S.Shadow>
      <S.Card ativo={ativo} onClick={filtrar}>
        <S.Contador>{contador}</S.Contador> <S.Label>{props.legenda}</S.Label>
      </S.Card>
    </S.Shadow>
  )
}

export default FiltroCard
