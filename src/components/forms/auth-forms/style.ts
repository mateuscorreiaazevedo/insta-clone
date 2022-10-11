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
