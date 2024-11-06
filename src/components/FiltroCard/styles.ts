import styled from 'styled-components' // Importa o módulo styled-components para criar componentes com estilos encapsulados
import { props } from './indes' // Importa a tipagem 'props' do arquivo './indes'

/*
  Cria um componente 'Card' com estilos condicionais, usando a tipagem 'props' para validar as propriedades recebidas.
  O estilo é baseado no valor da propriedade 'ativo', aplicando estilos diferentes dependendo se 'ativo' é verdadeiro ou falso.
*/
export const Card = styled.div<props>`
  padding: 8px; /* Espaçamento interno do componente */
  border: 1px solid ${(props) => (props.ativo ? '#1e90ff' : '#a1a1a1')}; /* Cor da borda muda conforme 'ativo' */
  background-color: ${(props) =>
    props.ativo ? '#fff' : '#fcfcfc'}; /* Cor de fundo muda conforme 'ativo' */
  color: ${(props) =>
    props.ativo
      ? '#1e90ff'
      : '#5e5e5e'}; /* Cor do texto muda conforme 'ativo' */
  border-radius: 8%; /* Arredondamento dos cantos */
  cursor: pointer; /* Exibe o cursor de ponteiro ao passar o mouse sobre o componente */
`

/*
  Cria um componente 'Contador' que representa um contador estilizado.
  Este componente exibe o texto em negrito e com um tamanho de fonte grande.
*/
export const Contador = styled.span`
  font-weight: bold; /* Define o texto como negrito */
  font-size: 24px; /* Define o tamanho da fonte */
  display: block; /* Define o elemento como bloco para que ocupe toda a largura */
`

/*
  Cria um componente 'Label' que representa uma legenda ou rótulo estilizado.
  Este componente exibe o texto com um tamanho de fonte menor.
*/
export const Label = styled.span`
  font-size: 14px; /* Define o tamanho da fonte */
`
