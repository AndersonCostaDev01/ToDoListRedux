import styled from 'styled-components'

type props = {
  ativo: boolean
}

export const Card = styled.div<props>`
  padding: 8px;
  border: 1px solid ${(props) => (props.ativo ? '#1e90ff' : '#a1a1a1')};
  background-color: ${(props) => (props.ativo ? '#fff' : '#fcfcfc')};
  color: ${(props) => (props.ativo ? '#1e90ff' : '#5e5e5e')};
  border-radius: 8%;
  cursor: pointer;
`

export const Contador = styled.span`
  font-weight: bold;
  font-size: 24px;
  display: block;
`

export const Label = styled.span`
  font-size: 14px;
`
export const Shadow = styled.div`
  :hover {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.25);
    transition: box-shadow 0.5s ease-in-out;
  }
`
