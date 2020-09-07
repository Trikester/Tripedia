import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const StyledFooter = styled.div`
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 5vh;
    display:flex;
    flex-direction: column;
    align-items: center;
    
`
const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 10px;
  width: 100%;
  height: 100%;
`
const Title = styled.h1`
  font-weight: 350;
  font-size: 0.9em;
  margin-bottom: 0;

  color: rgba(255, 255, 255, 0.95);
  text-shadow: 0px 0px 10px rgba(138, 185, 210, 0.2);
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
        <StyledFooter>
            <ContentContainer>
            
                <Title>
                    © {new Date().getFullYear()}, Made by
                    {` `}
                    <StyleA href="https://github.com/Trikester">@CraigPinchin</StyleA>
                </Title>
                
            
            </ContentContainer>
        </StyledFooter>
    )


export default Footer