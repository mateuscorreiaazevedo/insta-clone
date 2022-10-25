import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const PostSection = styled.section`
  width: 100%;
  max-width: 560px;
  border-radius: 15px;
  background: ${({ theme }) => theme.colors.primary};
  box-shadow: 0 0 50px rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const PostUserAvatar = styled.img`
  width: 34px;
  height: 34px;
  border-radius: 50%;
  object-fit: cover;
`

export const HeadLine = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  gap: 15px;
  color: ${({ theme }) => theme.colors.text};
  h2 {
    font-size: 1.6rem;
  }
`

export const PostNav = styled.nav`
  width: 100%;
  padding: 0 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #777;
  min-height: 60px;
  max-height: 60px;
`

export const NavOptions = styled.div`
  position: relative;
  svg {
    cursor: pointer;
    font-size: 2.4rem;
  }

  ul {
    list-style: none;
    position: absolute;
    padding: 10px 0;
    border-radius: 15px;
    opacity: 0;
    right: -16px;
    top: 35px;
    width: 120px;
    transition: all 400ms;
    background: ${({ theme }) => (
      theme.title !== 'dark' ? theme.colors.secondary : theme.colors.secondary
    )};
    &::after {
      content: "";
      width: 0;
      height: 0;
      top: -10px;
      right: 18px;
      position: absolute;
      border-left: 10px solid transparent;
      border-right: 10px solid transparent;
      border-bottom: 10px solid ${({ theme }) => (
        theme.title !== 'dark' ? theme.colors.secondary : theme.colors.secondary
      )};
    }
    &.active {
      opacity: 1;
    }
    li {
      cursor: pointer;
      padding: 6px 15px;
      transition: all 400ms;
      &.red {
        color: ${({ theme }) => theme.colors.red};
      }
      a {
        text-decoration: none;
        color: ${({ theme }) => theme.colors.text};
      }
      &:hover {
        background: ${({ theme }) => theme.colors.primary};
      }
    }
  }
`

export const PostImage = styled.img`
  width: 100%;
  height: 100%;
  max-height: 450px;
  object-fit: contain;
  flex-grow: 1;
  padding: 0 15px;
  margin: 5px 0;
`

export const ContainerActions = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 0;
  justify-content: center;
`

export const ContainerBtnActions = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  padding: 0 10px;
`

export const CommentList = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px 15px;
  gap: 5px;
`

export const Subtitle = styled.p`
  font-size: 1.4rem;
  a {
    text-decoration: none;
    font-weight: bold;
    font-size: 1.4rem;
    color: ${({ theme }) => theme.colors.text};
  }
`

export const More = styled.span`
  cursor: pointer;
  font-size: 1.2rem;
  color: #777;
`

export const BtnLike = styled.span.attrs({ role: 'button' })`
  cursor: pointer;
  font-size: 2.4rem;
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
export const PostLikes = styled.p`
  font-size: 1.4rem;
`

export const PostForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const PostComment = styled.textarea`
  resize: none;
  flex-grow: 1;
  border: none;
  outline: none;
  background: none;
  padding: 10px 15px;
  color: ${({ theme }) => theme.colors.text};
`

export const BtnCommentSubmit = styled.button`
  color: ${({ theme }) => theme.colors.blue};
  background: none;
  border: none;
  padding: 10px;
  font-size: 1.5rem;
  cursor: pointer;
`
