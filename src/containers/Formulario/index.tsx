import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

import * as S from '../../styles'
import { Form, Opcoes, BotaoSalvar, Opcao } from './styles'
import * as enums from '../../utils/enums/Tarefas'
import Tarefa from '../../models/Tarefa'
import { idText } from 'typescript'
import { cadastrar } from '../../store/reducers/tarefas'

export default function Formulario() {
  // Criação do dispach para a aplicação do redux
  const dispatch = useDispatch()
  // Cria caminho para navegação
  const navigate = useNavigate()
  // Criação das variáveis
  const [titulo, setTitulo] = useState('')
  const [descricao, setDescricao] = useState('')
  const [prioridade, setPrioridade] = useState(enums.Prioridade.NORMAL)

  function cadastraTarefa(evento: FormEvent) {
    evento.preventDefault()
    const tarefaParaAdicionar = new Tarefa(
      titulo,
      prioridade,
      enums.Status.PENDENTE,
      descricao,
      9
    )
    dispatch(cadastrar(tarefaParaAdicionar))
    navigate('/')
  }

  return (
    <S.MainContainer>
      <Form onSubmit={cadastraTarefa}>
        <S.Titulo>Nova tarefa</S.Titulo>
        <S.Input
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          type="text"
          placeholder="Título"
        />
        <S.Input
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
          as="textarea"
          placeholder="Descrição"
        />
        <Opcoes>
          <p>Prioridade</p>
          {Object.values(enums.Prioridade).map((prioridade) => (
            <Opcao key={prioridade}>
              <input
                type="radio"
                name="prioridade"
                id={prioridade}
                value={prioridade}
                defaultChecked={prioridade === enums.Prioridade.NORMAL}
                onChange={(e) =>
                  setPrioridade(e.target.value as enums.Prioridade)
                }
              />{' '}
              <label htmlFor={prioridade}>{prioridade}</label>
            </Opcao>
          ))}
        </Opcoes>
        <BotaoSalvar type="submit">Cadastrar</BotaoSalvar>
      </Form>
      <Link to="/">Ir para lista de tarefas</Link>
    </S.MainContainer>
  )
}
