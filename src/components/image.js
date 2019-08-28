import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Image = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "brandon.png" }) {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => 
      <Img
        imgStyle={{ borderRadius: '50%', width: 'auto' }}
        fluid={data.placeholderImage.childImageSharp.fluid}
      />
    }
  />
)
export default Image
