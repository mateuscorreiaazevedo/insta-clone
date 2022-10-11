import { lighten } from 'polished'
import styled from 'styled-components'

export const ButtonSubmit = styled.button.attrs({ type: 'submit' })`
  width: 100%;
  cursor: pointer;
  border: none;
  height: 46px;
  border-radius: 15px;
  font-size: 2rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  background: ${({ theme }) => theme.colors.blue};
  transition: all 600ms;
  &.disabled {
    background: #777;
  }
  &:hover {
    background: ${({ theme }) => lighten(0.1, theme.colors.blue)};
  }
`
