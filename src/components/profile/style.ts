import styled from 'styled-components'

export const SectionProfile = styled.section`
  height: 40vh;
  padding: 80px;
  display: flex;
  align-items: stretch;
  gap: 40px;
  @media (max-width: 768px) {
    gap: 10px;
  }
`

export const UserAvatar = styled.img`
  width: 150px;
  height: 150px;
  size: 150px;
  border-radius: 50%;
  object-fit: cover;
  @media (max-width: 810px) {
    width: 120px;
    height: 120px;
  }
  @media (max-width: 760px) {
    width: 90px;
    height: 90px;
  }
`

export const ContainerInfo = styled.div`
  display: flex;
  gap: 15px;
  flex-direction: column;
`

export const Head = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
  margin-bottom: 20px;
  @media (max-width: 768px) {
    margin-bottom: 0;
    flex-direction: column;
    align-self: flex-start;
    align-items: flex-start;
  }
`
export const UserName = styled.h2`
  font-size: 3.4rem;
  cursor: default;
  @media (max-width: 425px) {
    font-size: 1.6rem;
  }
`
export const Bio = styled.p`
  font-size: 1.8rem;
  width: 30rem;
  @media (max-width: 425px) {
    font-size: 1.4rem;
  }
`
export const Link = styled.a`
  text-decoration: none;
  color: ${props => props.theme.colors.blue};
  font-size: 1.6rem;
  transition: all 600ms;
  &:hover {
    letter-spacing: 1.2px;
  }
  @media (max-width: 425px) {
    font-size: 1.4rem;
  }
`
export const EditBtn = styled.span`
  cursor: pointer;
  font-size: 2rem;
  text-align: center;
  @media (max-width: 425px) {
    font-size: 1.4rem;
  }
`

export const Publications = styled.h2`
  width: 100%;
  text-align: center;
  font-size: 3rem;
  
  .divider {
    margin-top: 5px;
    width: 100%;
    height: 1px;
    background: #7777;
  }
`

export const SectionPosts = styled.div`
  display: grid;
  grid-template-columns: 32.3% 32.3% 32.3%;
  grid-gap: 15px;
  padding: 15px 0;
`
