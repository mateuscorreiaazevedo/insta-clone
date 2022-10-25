import styled from 'styled-components'

export const SectionProfile = styled.section`
  height: 40vh;
  padding: 80px;
  display: flex;
  align-items: stretch;
  gap: 40px;
`

export const UserAvatar = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
`
export const Head = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
  margin-bottom: 20px;
`
export const UserName = styled.h2`
  font-size: 3.4rem;
  cursor: default;
`
export const Bio = styled.p`
  font-size: 1.8rem;
  width: 30rem;
`
export const Link = styled.a`
  text-decoration: none;
  color: ${props => props.theme.colors.blue};
  font-size: 1.6rem;
  transition: all 600ms;
  &:hover {
    letter-spacing: 1.2px;
  }
`
export const EditBtn = styled.span`
  cursor: pointer;
  font-size: 2rem;
  text-align: center;

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
