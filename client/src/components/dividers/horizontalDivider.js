import styled from "styled-components";

const HorizontalDividerStyled = styled.div`
    height: 0;
    width: ${props => props.length};
    border-bottom: ${props => props.bb};
`;
export const HorizontalDivider = (props) => {
    return <HorizontalDividerStyled {...props} />;
};
