import React from 'react'
import styled from "styled-components"
import PropTypes from "prop-types"

const StyledNavigator = styled.div`

`

const StyledList = styled.li`

`

export default function ContentNavigator(props){

    return(
        <StyledNavigator>
        <h3>{props.title}</h3>
        <StyledList>
            <ul>{props.title1}</ul>
            <ul>test</ul>
            <ul>test</ul>
        </StyledList>
    </StyledNavigator>
    )
}
