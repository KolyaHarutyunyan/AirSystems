import styled from "styled-components";

export const HorizontalDividerStyled = styled.div`
    height: 0;
    width: ${(props) => props.length};
    border-bottom: ${(props) => props.bb};
`;
