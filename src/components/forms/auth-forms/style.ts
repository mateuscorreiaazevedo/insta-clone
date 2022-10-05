import styled from 'styled-components'

export const Form = styled.form`
  width: 90%;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: space-evenly;
  flex-grow: 1;
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
  position: absolute;
  width: 400px;
  top: 260px;
  display: none;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  margin-left: 7.5px;
  &.active {
    font-size: 1.4rem;
    height: 46px;
    display: flex;
    background: ${({ theme }) => theme.colors.red};
  }
`
