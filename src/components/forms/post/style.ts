import styled from 'styled-components'

export const Container = styled.div`
  width: 90vw;
  max-width: 1080px;
  min-height: 80vh;
  max-height: 90vh;
  background: ${({ theme }) => theme.colors.background};
  border-radius: 15px;
  padding: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  &.page {
    margin: 32px 0;
  }
  @media (max-width: 425px) {
    padding: 10px;
    max-height: 100vh;
  }
`

export const ErrorMsg = styled.p`
  position: absolute;
  top: 25px;
  width: 980px;
  padding: 5px;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.6rem;
  height: 42px;
  background: ${({ theme }) => theme.colors.red};
  &.page {
    top: 80px;
  }
`

export const Title = styled.h1`
  border-bottom: 1px solid #777;
  width: 100%;
  margin-bottom: 25px;
  text-align: center;
  @media (max-width: 425px) {
    font-size: 2.4rem;
  }
`

export const Form = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 15px;
    height: 100%;
  }
`

export const closeBtn = styled.div`
  position: absolute;
  cursor: pointer;
  top: 15px;
  right: 15px;
  .icon {
    font-size: 2.5rem;
    font-weight: 100;
    color: ${({ theme }) => theme.colors.text};
  }
  @media (max-width: 425px) {
    top: 5px;
    .icon {
      font-size: 3rem;
    }
  }
`

export const IconPreview = styled.div`
  font-size: 40rem;
  color: ${({ theme }) => theme.colors.secondary};
  @media (max-width: 768px) {
    font-size: 20rem;
  }
`

export const Label = styled.label`
  cursor: pointer;
  height: 100%;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Input = styled.input`
  display: none;
`

export const ImagePreview = styled.img`
  max-height: 50vh;
  max-width: 570px;
  object-fit: contain;
  @media (max-width: 768px) {
    max-width: 100%;
    max-height: 30vh;
  }
`

export const InputSubtitle = styled.textarea`
  @media (max-width: 768px) {
    height: 30vh;
    width: 100%;
  }
  width: 340px;
  height: 50vh;
  font-size: 1.4rem;
  background: ${({ theme }) => theme.colors.secondary};
  border-radius: 15px;
  color: ${({ theme }) => theme.colors.text};
  padding: 15px;
  outline: none;
  border: none;
  resize: none;
`

export const SectionPost = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media (max-width: 768px) {
    width: 100%;
    flex-grow: 1;
  }
`
