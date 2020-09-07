/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"
import "./layout.css"
import styled from "styled-components"
import Img from "gatsby-image"


const BgImg = styled(Img)`
  position: fixed !important;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: -1;
`
const StyledMain = styled.div`
  color: rgba(255, 255, 255, 0.95);
  display:flex;
  flex-direction: column;
`
const StyledContent = styled.div`
  color: rgba(255, 255, 255, 0.95);
  display:flex;
  flex-direction: column;
  flex-grow: 1;
  margin-right: 1.45rem;
  margin-left: 1.45rem;
  max-height: 80vh;
`
const SideBar = styled.div`
  width: 20%;
`
const StyledLayout = styled.div`
  margin-bottom: 0;
  height:100%;
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
      placeholderImage: file(relativePath: { eq: "background.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2560) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)


  return (
   
    <StyledLayout>
        
        <BgImg fluid={data.placeholderImage.childImageSharp.fluid} />
        <StyledMain>
          <Header siteTitle={data.site.siteMetadata.title} />      
          <StyledContent>{children}</StyledContent>
          <Footer></Footer>
        </StyledMain>
     
    </StyledLayout>
    
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
