import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const PostSection = styled.section`
  width: 460px;
  height: 600px;
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
  height: 60px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.text};
`

export const PostImage = styled.img`
  width: 100%;
  height: 100%;
  max-height: 460px;
  object-fit: contain;
  flex-grow: 1;
  padding: 0 15px;
`

export const ContainerActions = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const ContainerBtnActions = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  padding: 0 10px;
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
