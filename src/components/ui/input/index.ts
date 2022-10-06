import styled from 'styled-components'

export const Input = styled.input`
  width: 100%;
  height: 48px;
  border: none;
  outline: none;
  border-radius: 15px;
  font-size: 1.6rem;
  padding: 5px 16px;
  padding-right: 36px;
  background: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.text};
`
