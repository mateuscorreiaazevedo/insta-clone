import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Div = styled.div`
  background: ${({ theme }) => theme.colors.primary};
  width: 90vw;
  max-width: 980px;
  height: 70vh;
  border-radius: 15px;
  display: flex;
  padding: 15px 0;
  align-items: center;

  .btn-options {
    cursor: pointer;
    font-size: 2rem;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    transition: all 400ms;
    &:active {
      background: ${({ theme }) => theme.colors.secondary};
    }
  }
`

export const Image = styled.img`
  max-height: 70vh;
  max-width: 60%;
  padding: 15px;
`

export const UserAvatar = styled.img`
  width: 40px;
  height: 40px;
  object-fit: cover;
  border-radius: 50%;
`

export const ContainerInfo = styled.div`
  display: flex;
  height: 100%;
  margin-left: 7.5px;
  padding-left: 7.5px;
  border-left: 1px solid #777;
  flex-direction: column;
  align-items: stretch;
  width: 100%;
  justify-content: space-between;
`

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 60px;
  border-bottom: 1px solid #777;
  position: relative;
`
export const LinkTo = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  text-decoration: none;
  gap: 5px;
  color: ${({ theme }) => theme.colors.text};
  h3 {
    font-size: 1.6rem;
  }
`

export const ContainerSubtitle = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  font-size: 1.4rem;
  flex-grow: 1;
  text-align: start;
`

export const CommentsList = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  padding: 15px 0;
`

export const OptionsNav = styled.ul`
  position: absolute;
  list-style: none;
  opacity: 0;
  height: 0;
  transition: all 400ms;
  right: -15px;
  width: 150px;
  border-radius: 10px;
  padding: 15px 0;
  background: ${({ theme }) => theme.colors.secondary};
  &::after {
    content: "";
    width: 0;
    height: 0;
    top: -10px;
    right: 15px;
    position: absolute;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid ${({ theme }) => (
      theme.title !== 'dark' ? theme.colors.secondary : theme.colors.secondary
    )};
  }

  &.active {
    opacity: 1;
    height: 80px;
  }
`
export const Options = styled.li`
  cursor: pointer;
  padding: 5px 10px;
  &:hover {
    background: ${({ theme }) => theme.colors.primary};
  }
  transition: all 400ms;
  &.delete {
    color: ${({ theme }) => theme.colors.red};
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.text};

  }
`

export const BtnLike = styled.span`
  font-size: 2.4rem;
  cursor: pointer;

  .red {
    color: ${({ theme }) => theme.colors.red};
  }
  svg {
    animation: liked 400ms;
    @keyframes liked {
      from {
        transform: scale(0);
      }
    }
  }
  
`

export const ContainerActions = styled.div`
  height: 100px;
  padding: 10px 0;
  border-top: 1px solid #777;
`

export const UsersLikeds = styled.p`
  font-size: 1.4rem;
`

export const ContainerComments = styled.div`
  margin: 5px;
  display: flex;
  padding: 0 10px;
  align-items: center;
  justify-content: space-between;
  background: ${({ theme }) => theme.colors.secondary};
  border-radius: 5px;
`

export const CommentField = styled.textarea`
  resize: none;
  width: 90%;
  height: 40px;
  border: none;
  outline: none;
  background: none;
  padding:10px;
  padding-left: 15px;
  color: ${({ theme }) => theme.colors.text};
`

export const BtnSubmit = styled.button`
  cursor: pointer;
  border: none;
  background: none;
  color: ${({ theme }) => theme.colors.blue};
`