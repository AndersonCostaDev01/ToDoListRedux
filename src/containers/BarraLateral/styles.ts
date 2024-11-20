import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Aside = styled.aside`
  padding: 16px;
  background-color: #eee;
  height: 100vh;
`
export const Filtros = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
  margin-top: 16px;
`

export const Voltar = styled(Link)`
  text-decoration: none;
  background-color: #fff;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  margin-bottom: 16px;
  font-weight: bold;
  transition: height 0.2s ease-in-out;

  &:hover {
    height: 52px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.25);
  }
`
