import * as S from '../../styles'
import { Form, Opcoes, BotaoSalvar } from './styles'

export default function Formulario() {
  return (
    <S.MainContainer>
      <Form>
        <S.Titulo>Nova tarefa</S.Titulo>
        <S.Input type="text" placeholder="Título" />
        <S.Input as="textarea" placeholder="Descrição" />
        <Opcoes>
          <p>Prioridade</p>
          <input name="prioridade" type="radio" id="urgente" />
          <label htmlFor="urgente">Urgente</label>
          <input name="prioridade" type="radio" id="importante" />
          <label htmlFor="importante">Importante</label>
          <input name="prioridade" type="radio" id="normal" />
          <label htmlFor="normal">Normal</label>
        </Opcoes>
        <BotaoSalvar type="submit">Cadastrar</BotaoSalvar>
      </Form>
    </S.MainContainer>
  )
}
