/** Importação do componente FiltroCard */
import FiltroCard from '../../components/FiltroCard/indes'
/** Importação dos estilos */
import * as S from './styles'

const BarraLateral = () => {
  return (
    <S.Aside>
      <S.Input type="text" placeholder="Buscar" />
      <S.Filtros>
        <FiltroCard contador={2} legenda="Principal" />
        <FiltroCard contador={2} legenda="Concluidas" />
        <FiltroCard contador={23} legenda="Urgente" />
        <FiltroCard contador={3} legenda="Importantes" />
        <FiltroCard contador={8} legenda="Normal" />
        <FiltroCard contador={6} legenda="Todas" ativo />
      </S.Filtros>
    </S.Aside>
  )
}

export default BarraLateral
