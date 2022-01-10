import styled from "styled-components";

const RouteLinkStyled = styled.a`
    margin: 0 40px;
    background-color: white,
    width: 100px;
    height: 100px;
    border: 1px solid red;
`

export const RouteLink = ({where, children, ...restProps})=> {
    return (
        <RouteLinkStyled >{children}</RouteLinkStyled>
    )
}