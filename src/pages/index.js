import React from "react"
import picture from '../images/brandon.png'
import styled from 'styled-components'
import Layout from '../components/layout'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faLinkedin, faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons"

const Root = styled.div`
  
`
const Section = styled.div`
  display: flex;
  justify-content: center;
`

const NameSection = styled(Section)`
  flex-direction: column;
`

const ImageWrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  margin: 2rem 0;
`

const Img = styled.img`
  border-radius: 50%;
  width: 14rem;
  margin: 0;
`

const NameTitle = styled.span`
  text-align: center;
  margin-bottom: 5px;
  font-size: 3rem;
  font-weight: 600;
`
const NameSubTitle = styled.span`
  margin-top: 1rem;
  text-align: center;
  letter-spacing: 1px;
  font-size: 2rem;
`
const LinkSection = styled(Section)`
  margin-top: 1rem;
`
const UlLinks = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
`

const Item = styled.li`
  & > a {
    display: block;
    text-align: center;
    margin: 16px;
    text-decoration: none;
    cursor: pointer;
    color: #3d464d;

    &:hover {
      color: black
    }
  }
`

const SocialMedia = styled.div`
  display: flex;
  justify-content: center;
  & > * {
    text-decoration: none;
    font-size: 2rem;
    margin: 0 .5rem;
    color: #3d464d;
    cursor: pointer;
    &:hover {
      color: black;
    }
  }
`

const Footer = styled(Section)`
  flex-direction: row;
  margin-top: 5rem;
`

const IndexPage = () => (
  <Layout>
    <Root>
      <ImageWrapper>
        <Img src={picture} alt="Brandon"/>
      </ImageWrapper>
      <NameSection>
        <NameTitle>Brandon Villa</NameTitle>
        <NameSubTitle>Software Development Engineer</NameSubTitle>
      </NameSection>
      <LinkSection>
        <UlLinks>
          <Item><a >About</a></Item>
          <Item><a href="https://github.com/brandonvilla21" target="_blank">GitHub</a></Item>
          <Item><a>Projects</a></Item>
          <Item><a href="mailto:brandon.villa.cardenas@gmail.com">Contact</a></Item>
        </UlLinks>
      </LinkSection>
      <SocialMedia>
        <a href="https://www.instagram.com/brandonvilla21/" target="_blank"><FontAwesomeIcon icon={faInstagram} /></a>
        <a href="https://www.linkedin.com/in/brandon-villa-622522155/" target="_blank"><FontAwesomeIcon icon={faLinkedin} /></a>
        <a href="https://github.com/brandonvilla21" target="_blank"><FontAwesomeIcon icon={faGithub} /></a>
        <a href="https://twitter.com/brandonVilCa21" target="_blank"><FontAwesomeIcon icon={faTwitter} /></a>
      </SocialMedia>
      <Footer>
        <div style={{ flex: 1, textAlign: 'right' }}>
          <span>Resume |</span>
        </div>
        <div style={{ flex: 1 }}>
          &nbsp;View it on GitHub
        </div>
      </Footer>
    </Root>
  </Layout>
)

export default IndexPage
