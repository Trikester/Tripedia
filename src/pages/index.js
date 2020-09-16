import React from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"
import styled from "styled-components"

import Layout from "../components/layout"
import Image from "../components/image"
import Infobar from "../components/rightInfo"
import ContentNavigator from "../components/contentNavigator"

const CenterDiv = styled.div`
  display:flex;
  flex-direction:row;
  justify-content:center;
  display: flex;
  flex-grow: 1;
  
`
const ContentContainer = styled.div`
  background:rgb(6, 34, 69,0.8);
  width: 80%;
  
`
const IndexPage = () => (
  <Layout>
      <SEO title="Home" />
    <CenterDiv>
      <ContentContainer>
        <h1>Gatsby js</h1>
        <p>A website framework built using react</p>
        <ContentNavigator title = "Gatsby" title1 = "Please"></ContentNavigator>
        
       

        <Link to="/page-2/">Go to page 2</Link> <br />
        <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
      </ContentContainer>
      <Infobar></Infobar>
    </CenterDiv>
  </Layout>
)

export default IndexPage

//<div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}><Image /></div>