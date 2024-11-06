/** Importação do componente FiltroCard */
import FiltroCard from '../../components/FiltroCard/indes'
/** Importação dos estilos */
import * as S from './styles'

const BarraLateral = () => {
  return (
    <S.Aside>
      <S.Input type="text" placeholder="Buscar" />
      <S.Filtros>
        <FiltroCard />
        <FiltroCard />
        <FiltroCard />
        <FiltroCard />
        <FiltroCard />
        <FiltroCard ativo />
      </S.Filtros>
    </S.Aside>
  )
}

export default BarraLateral
