import styled from "styled-components";

const Flex = styled.div`
    display: flex;
    justify-content: ${(props) => props.justify || "center"};
    align-items: ${(props) => props.align || "center"};
    flex-direction: ${(props) => props.direction || "row"};
    flex-wrap: ${(props) => props.wrap || "nowrap"};
    flex-grow: ${(props) => props.grow || 0};
    gap: ${(props)=>props.gap||"0"};
    flex-shrink: ${(props) => props.shrink || 1};
    flex-basis: ${(props) => props.basis || "auto"};
    width: ${(props) => props.width || "auto"};
    height: ${(props) => props.height || "auto"};
    margin: ${(props) => props.margin || "0"};
    padding: ${(props) => props.padding || "0"};
    background: ${(props) => props.background || "none"};
    border: ${(props) => props.border || "none"};
    border-radius: ${(props) => props.radius || "0"};
    position: ${(props) => props.position || "relative"};
    top: ${(props) => props.top || "auto"};
    right: ${(props) => props.right || "auto"};
    bottom: ${(props) => props.bottom || "auto"};
    left: ${(props) => props.left || "auto"};
    z-index: ${(props) => props.zIndex || "auto"};
    overflow: ${(props) => props.overflow || "visible"};
    box-shadow: ${(props) => props.shadow || "none"};
    transition: ${(props) => props.transition || "none"};
    transform: ${(props) => props.transform || "none"};
    cursor: ${(props) => props.cursor || "auto"};
    opacity: ${(props) => props.opacity || "1"};
    &:hover {
        opacity: ${(props) => props.hover || "1"};
    }
    @media screen and (max-width: 960px) {
        flex-direction: ${(props) => props.direction || "column"};
    }
    `;

export {Flex};