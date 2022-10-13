import styled from 'styled-components'

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.background};
  width: 440px;
  height: 70vh;
  padding: 30px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  .divider {
    width: 90%;
    height: 1px;
    background: #777;
    margin: 10px auto;
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: stretch;
`

export const LabelPassword = styled.label`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;

`

export const BtnViewPass = styled.span`
  position: absolute;
  right: 12px;
`

export const UserAvatar = styled.img`
  width: 96px;
  height: 96px;
  border-radius: 50%;
  object-fit: cover;
`

export const ContainerAvatar = styled.label`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  input {
    display: none;
  }
  p {
    margin-top: 20px;
    margin-bottom: -10px;
    color: #777;
    font-size: 1.2rem;
  }
`

export const HoverCamera = styled.span`
  cursor: pointer;
  top: 0;
  position: absolute;
  width: 96px;
  background: rgba(255,255,255,0.5);
  height: 96px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4rem;
  color: #333;
  opacity: 0;
  transition: opacity 400ms;
  &:hover {
    opacity: 1;
  }
`

export const ErrorMsg = styled.p`
  top: 25px;
  width: 100%;
  padding: 5px;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;
  height: 42px;
  background: ${({ theme }) => theme.colors.red};
`
