import styled from 'styled-components'

export const Form = styled.form`
  /* max-width: 547px; */
  width: 100%;
  font-weight: bold;
  font-size: 14px;
  color: #666;

  textarea {
    height: 100px;
    resize: none;
    margin-top: 16px;
    margin-bottom: 16px;
  }
`

export const Opcoes = styled.div`
  margin-bottom: 16px;

  p {
    margin-bottom: 8px;
  }

  label {
    margin-right: 8px;
  }
`

export const BotaoSalvar = styled.button`
  width: 20%;
  height: 32px;
  background-color: #44db32;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 12px;
  font-weight: bold;
  cursor: pointer;
`
export const Opcao = styled.div`
  display: inline-block;
  text-transform: capitalize;
`
