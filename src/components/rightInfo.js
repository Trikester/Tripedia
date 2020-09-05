import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import cool from "../images/gatsby-icon.png"

const StyledDiv =styled.div`
    background:rgb(6, 34, 69,0.8);
    width: 20%;
    border-left:6px solid;
    border-color:rgb(3, 16, 51,0.8);
`
const ContentContainer = styled.div`
    width: 100%;
    display:flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    align-content: stretch;
`

const Infopic = styled.img`
    object-fit: cover;
    max-width:80%;
    max-height:80%;
    margin-bottom: 1.45rem;
`
const ImageBox = styled.div`
    display: flex;
    flex-direction:column;
    width: 100%;
    align-items: center;
    justify-content: center;
    
    border-bottom:6px solid;
    border-color:rgb(3, 16, 51,0.8);
    padding: 0.7rem;
    margin-bottom:1.45rem;
`

const InfoBar =()=> (  
    <StyledDiv>
        <ContentContainer>
            <ImageBox><Infopic src={cool}></Infopic> The Gatsby Icon</ImageBox>
            <div>Side bar info</div>
        </ContentContainer>
    </StyledDiv>
)

export default InfoBar