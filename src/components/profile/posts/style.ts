import styled from 'styled-components'

export const ContainerImage = styled.div`
  cursor: pointer;
  position: relative;
`

export const Image = styled.img`
  width: 100%;
  height: 100%;
  max-width: 315px;
  max-height: 315px;
  size: 293px;
  object-fit: cover;
`

export const LikesAndComments = styled.div`
  position: absolute;
  top: 0;
  opacity: 0;
  width: 100%;
  height: 100%;
  max-width: 315px;
  max-height: 315px;
  gap: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0,0,0,0.2);
  &:hover {
    opacity: 1;
  }
`

export const Info = styled.span`
  display: flex;
  align-items: center;
  font-size: 2rem;
  gap: 2px;
  color: #fff;
`
