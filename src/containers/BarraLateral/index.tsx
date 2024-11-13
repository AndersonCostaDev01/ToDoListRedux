/** Importação do componente FiltroCard */
import { useDispatch, useSelector } from 'react-redux'
import FiltroCard from '../../components/FiltroCard/indes'
/** Importação dos estilos */
import * as S from './styles'
import { RootReducer } from '../../store'
import { alteraTermo } from '../../store/reducers/filtro'

const BarraLateral = () => {
  const dispatch = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  return (
    <S.Aside>
      <S.Input
        type="text"
        placeholder="Buscar"
        value={termo}
        onChange={(e) => dispatch(alteraTermo(e.target.value))}
      />
      <S.Filtros>
        <FiltroCard contador={2} legenda="Principal" />
        <FiltroCard contador={2} legenda="Concluidas" />
        <FiltroCard contador={2} legenda="Urgente" />
        <FiltroCard contador={3} legenda="Importantes" />
        <FiltroCard contador={8} legenda="Normal" />
        <FiltroCard contador={6} legenda="Todas" ativo />
      </S.Filtros>
    </S.Aside>
  )
}

export default BarraLateral
