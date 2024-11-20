/** Importação do componente FiltroCard */
import { useDispatch, useSelector } from 'react-redux'
import FiltroCard from '../../components/FiltroCard/indes'
import { RootReducer } from '../../store'
import { alteraTermo } from '../../store/reducers/filtro'
/** Importação dos estilos */
import { Input } from '../../styles'
import * as S from './styles'
import * as enums from '../../utils/enums/Tarefas'

type props = {
  mostrarFiltros?: boolean
}

const BarraLateral = ({ mostrarFiltros }: props) => {
  const dispatch = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  return (
    <S.Aside>
      {mostrarFiltros ? (
        <>
          <Input
            type="text"
            placeholder="Buscar"
            value={termo}
            onChange={(e) => dispatch(alteraTermo(e.target.value))}
          />
          <S.Filtros>
            <FiltroCard
              valor={enums.Status.PENDENTE}
              criterio="status"
              legenda="Pendente"
            />
            <FiltroCard
              valor={enums.Status.CONCLUIDA}
              criterio="status"
              legenda="Concluidas"
            />
            <FiltroCard
              valor={enums.Prioridade.URGENTE}
              criterio="prioridade"
              legenda="Urgente"
            />
            <FiltroCard
              valor={enums.Prioridade.IMPORTANTE}
              criterio="prioridade"
              legenda="Importantes"
            />
            <FiltroCard
              valor={enums.Prioridade.NORMAL}
              criterio="prioridade"
              legenda="Normal"
            />
            <FiltroCard
              valor={enums.Status.PENDENTE}
              criterio="todas"
              legenda="Todas"
            />
          </S.Filtros>
        </>
      ) : (
        <S.Voltar to="/">Voltar</S.Voltar>
      )}
    </S.Aside>
  )
}

export default BarraLateral
