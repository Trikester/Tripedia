import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import Icon from "../images/TempLogo.png"

const StyledHeader = styled.header`
  margin-bottom: 1.43rem;
  background: #031f38,
`

const StyledDiv =styled.div`
  Width: 100%;
  Height 20%;
  
  background: rgba(58, 86, 102, 0.8);
  border-radius: 8px;
`
const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px;
  background: rgba(58, 86, 102, 0.8);
`
const ImageContainer = styled.div`
margin: 10px;
  Width:50px;
  Height:50px;
  -webkit-user-select:none;
  -khtml-user-select:none;
  -moz-user-select:none;
  -ms-user-select:none;
  -o-user-select:none;
  user-select:none;
`
const WebIcon = styled.img`
  height:100%;
  width:100%;
  background: rgba(255,255,255, 0.2);
  border-radius: 10%;
  padding: 2px;
`
const Title = styled.div`
  font-weight: 525;
  font-size: 2em;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;

  color: rgba(255, 255, 255, 0.95);
  text-shadow: 0px 0px 10px rgba(138, 185, 210, 0.2);
  -webkit-user-select:none;
  -khtml-user-select:none;
  -moz-user-select:none;
  -ms-user-select:none;
  -o-user-select:none;
  user-select:none;
`
const styledLink = styled.link`
  color: white;
  textDecoration: none;
  display: flex;
  flex-direction: column;
  align-items: center;
`



const Header = ({ siteTitle }) => (
  <StyledHeader>
    <ContentContainer>   
      
      <ImageContainer>
        <WebIcon src ={Icon}></WebIcon>
      </ImageContainer>
      <Title>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
          >
          {siteTitle}
        </Link>
      </Title>
    
    </ContentContainer>
  </StyledHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
