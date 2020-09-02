import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const styledFooter = styled.div`
    margin: 50px;
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 2.5rem;
    color: rgba(255, 255, 255, 0.95);
`
/*
style={{
              color: `white`,
              textDecoration: `none`,
            }}
*/
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
`
const ImageContainer = styled.div`
  Width:50px;
  Height:50px;
  margin: 10px;
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
const Title = styled.h1`
  font-weight: 525;
  font-size: 1em;

  color: rgba(255, 255, 255, 0.95);
  text-shadow: 0px 0px 10px rgba(138, 185, 210, 0.57);
  -webkit-user-select:none;
  -khtml-user-select:none;
  -moz-user-select:none;
  -ms-user-select:none;
  -o-user-select:none;
  user-select:none;
`
const StyleA = styled.a`
  color: white;
  textDecoration: none;
`

const Footer =()=> (    
        <styledFooter>
            <ContentContainer>
            
                <Title>
                    © {new Date().getFullYear()}, Made by
                    {` `}
                    <StyleA href="https://github.com/Trikester">@Trikester</StyleA>
                </Title>
                
            
            </ContentContainer>
        </styledFooter>
    )


export default Footer