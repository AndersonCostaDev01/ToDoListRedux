import * as S from './styles'

export type props = {
  ativo?: boolean
}

const FiltroCard = (props: props) => {
  return (
    <S.Card ativo={props.ativo}>
      <S.Contador>3</S.Contador> <S.Label>pendentes</S.Label>
    </S.Card>
  )
}

export default FiltroCard
