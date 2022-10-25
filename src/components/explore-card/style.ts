import styled from 'styled-components'

export const ContainerImage = styled.div`
  position: relative;
  width: 290px;
  height: 290px;
  margin: 10px;
  cursor: pointer;
`

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export const Preview = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: center;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.2);

  opacity: 0;

  p {
    font-size: 2.5rem;
    display: flex;
    gap: 5px;
    align-items: center;
    color: #fff;
  }

  &:hover {
    opacity: 1;
  }
`
