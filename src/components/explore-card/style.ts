import styled from 'styled-components'

export const ContainerImage = styled.div`
  position: relative;
  cursor: pointer;
  overflow: hidden;
  padding-bottom: 100%;

`

export const Image = styled.img`
  position: absolute;
  inset: 0;
  width: 300px;
  height: 300px;
  object-fit: cover;
  margin: auto;
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
