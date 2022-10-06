import { lighten } from 'polished'
import styled from 'styled-components'

export const Form = styled.form`
  width: 90%;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: space-evenly;
  gap: 10px;
`

export const ContainerPass = styled.div`
  position: relative;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`

export const BtnView = styled.span`
  position: absolute;
  right: 15px;
  top: 16px;
`

export const Warning = styled.span`
  font-size: 1.2rem;
  color: #888;
  margin-left: 26px;
  padding: 2px 0;
`

export const ContainerMsg = styled.div`
  width: 400px;
  display: flex;
  visibility: hidden;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  margin-left: 7.5px;
  height: 36px;
  &.active {
    font-size: 1.4rem;
    visibility: visible;
    background: ${({ theme }) => theme.colors.red};
  }
  @media (max-width: 425px) {
    width: 340px;
  }
`

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
