import styled from 'styled-components'

export const Article = styled.article`
  display: flex;
  flex-direction: column;
  gap: 25px;
  padding-left: 45px;
  @media (max-width: 920px) {
    padding-left: 0;
  }
`
