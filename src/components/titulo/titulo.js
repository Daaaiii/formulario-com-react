import React from "react"
import  styled  from 'styled-components'

function Title(props){
    return(
        <TitleForm>{props.title}</TitleForm>
    )
}

const TitleForm = styled.h1`
color: #123c69;

`



export default Title