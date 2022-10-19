import styled from 'styled-components'

export const Container = styled.div`
  width: 90vw;
  max-width: 1080px;
  height: 80vh;
  background: ${({ theme }) => theme.colors.background};
  border-radius: 15px;
  padding: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  &.page {
    margin: 32px 0;
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
`

export const Form = styled.form`
  display: flex;
  width: 100%;
  justify-content: space-between;
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
`

export const IconPreview = styled.div`
  font-size: 40rem;
  color: ${({ theme }) => theme.colors.secondary};
`

export const Label = styled.label`
  cursor: pointer;
  height: 50vh;
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
`

export const InputSubtitle = styled.textarea`
  min-width: 340px;
  max-width: 340px;
  min-height: 50vh;
  max-height: 50vh;
  font-size: 1.4rem;
  background: ${({ theme }) => theme.colors.secondary};
  border-radius: 15px;
  color: ${({ theme }) => theme.colors.text};
  padding: 15px;
  outline: none;
  border: none;
`

export const SectionPost = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;
`
