import styled from 'styled-components'
import { transparentize } from 'polished'

export const ContainerOptions = styled.ul`
  position: absolute;
  list-style: none;
  display: none;
  right: -30px;
  top: 40px;
  flex-direction: column;
  background: ${({ theme }) => (
        theme.title !== 'dark' ? theme.colors.primary : theme.colors.secondary
      )};
  box-shadow: 0 0 25px rgba(0,0,0,0.1);
  padding: 10px 0;
  border-radius: 15px;
  width: 200px;
  &::after {
      content: "";
      width: 0;
      height: 0;
      top: -10px;
      right: 32px;
      position: absolute;

      border-left: 10px solid transparent;
      border-right: 10px solid transparent;
      border-bottom: 10px solid ${({ theme }) => (
        theme.title !== 'dark' ? theme.colors.primary : theme.colors.secondary
      )};
    }
  &.active {
    display: flex;
  }
`

export const Options = styled.li`
  display: flex;
  align-items: stretch;
  padding: 8px 15px;
  span, a {
    font-size: 1.6rem;
    width: 100%;
    height: 100%;
    cursor: pointer;
    svg {
      margin-right: 12px;
    }
  }
  &:hover {
    background: ${({ theme }) => transparentize(0.1, theme.colors.background)};
  }
`
