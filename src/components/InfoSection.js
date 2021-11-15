import React, { useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import styled from 'styled-components'
import './InfoSection.css'

const Section = styled.div`
  display: flex;
  justify-content: center;
`

const LinkSection = styled(Section)`
  margin-top: 1rem;
`

const About = styled(Section)`
  margin: 0 .5em 1em;
  text-align: justify;
  text-justify: inter-word;

`
const UlLinks = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
`

const Item = styled.li`
  & > a {
    text-align: center;
    margin: 16px;
    text-decoration: none;
    cursor: pointer;
    color: #3d464d;
    display: inline-block;
    vertical-align: middle;
    transform: translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
    backface-visibility: hidden;
    -moz-osx-font-smoothing: grayscale;
    transition-duration: 0.3s;
    transition-property: transform;

    &:hover {
      color: black
    }
    &:hover,
    &:focus,
    &:active {
      transform: scale(1.1);
    }
  }
`

const InfoSection = () => {
  const [showAbout, setShowAbout] = useState(false)

  return (
    <>
      <LinkSection>
        <UlLinks>
          <Item><a onClick={() => setShowAbout(true)} >About</a></Item>
          <Item><a href="https://github.com/brandonvilla21" target="_blank">GitHub</a></Item>
          {/* <Item><a>Projects</a></Item> */}
          <Item><a href="mailto:brandon.villa.cardenas@gmail.com">Contact</a></Item>
        </UlLinks>
      </LinkSection>
      <CSSTransition
        in={showAbout}
        classNames="about"
        timeout={300}
        unmountOnExit
      >
        <About>
          {`I'm a fullstack developer who's passionate for learning new things everyday and do my best on every project I engage with`}
        </About>
      </CSSTransition>
    </>
  )
}

export default InfoSection