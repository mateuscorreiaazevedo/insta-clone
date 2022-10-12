import styled from 'styled-components'

export const ContainerSearch = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2px 16px;
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.secondary};
  svg {
    font-size: 2.4rem;
    color: #777;
  }

  input:focus ~ .content-results {
    display: flex;
  }
`

export const ContainerResults = styled.div.attrs({ className: 'content-results' })`
  position: absolute;
  top: 60px;
  background: ${({ theme }) => (
    theme.title !== 'dark' ? theme.colors.primary : theme.colors.secondary
  )};
  width: 340px;
  min-height: 350px;
  padding: 15px;
  display: none;
  border-radius: 15px;
  box-shadow: 0 0 25px rgba(0,0,0,0.1);
  &::after {
    content: "";
    width: 0;
    height: 0;
    top: -10px;
    left: 160px;
    position: absolute;

    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid ${({ theme }) => (
      theme.title !== 'dark' ? theme.colors.primary : theme.colors.secondary
    )};
    }
`
