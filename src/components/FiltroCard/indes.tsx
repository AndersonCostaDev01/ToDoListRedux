import * as S from './styles'

export type props = {
  ativo?: boolean
  contador: number
  legenda: string
}

const FiltroCard = (props: props) => {
  return (
    <S.Card ativo={props.ativo}>
      <S.Contador>{props.contador}</S.Contador>{' '}
      <S.Label>{props.legenda}</S.Label>
    </S.Card>
  )
}

export default FiltroCard
