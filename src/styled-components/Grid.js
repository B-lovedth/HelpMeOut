import styled from "styled-components"

const Grid = styled.div`
    display:grid;
    grid-template-columns: ${(props)=>props.templateColumns||"1fr 1fr"};
    gap: ${(props)=>props.gap||"0"};
    padding: ${(props)=>props.padding||"0"};
    margin: ${(props)=>props.margin||"0"};
    width: ${(props)=>props.width||"100%"};
    height: ${(props)=>props.height||"auto"};
    background: ${(props)=>props.background||"none"};
    border: ${(props)=>props.border||"none"};
    border-radius: ${(props)=>props.radius||"0"};
    position: ${(props)=>props.position||"relative"};
    justify-items: ${(props)=>props.justifyItems||"start"};
    @media screen and (max-width: 960px) {
        grid-template-columns: ${(props)=>props.templateColumns||"1fr"};
    }
`

export {Grid}